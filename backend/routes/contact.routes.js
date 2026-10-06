import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';

const router = express.Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesLogPath = path.join(__dirname, '..', 'messages.json');

// Helper to get saved messages
const getSavedMessages = () => {
  try {
    if (fs.existsSync(messagesLogPath)) {
      const data = fs.readFileSync(messagesLogPath, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading messages log:', err);
  }
  return [];
};

// POST /api/contact - Receive visitor/recruiter inquiries & send email via Resend
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message, company } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields.',
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    const newMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company ? company.trim() : 'N/A',
      subject: subject ? subject.trim() : 'Portfolio Inquiry',
      message: message.trim(),
      timestamp: new Date().toISOString(),
      status: 'received',
    };

    // 1. Save to local audit log
    const messages = getSavedMessages();
    messages.unshift(newMessage);
    try {
      fs.writeFileSync(messagesLogPath, JSON.stringify(messages.slice(0, 100), null, 2), 'utf8');
    } catch (fsErr) {
      console.error('Failed to write to messages.json:', fsErr);
    }

    console.log(`[Contact Form] New message from: ${name} (${email}) - Subject: ${newMessage.subject}`);

    // 2. Dispatch email via Resend if API key is configured
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.TO_EMAIL || 'shubhamharad25@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    let emailSent = false;
    let emailError = null;

    if (apiKey && apiKey.trim() !== '') {
      try {
        const resend = new Resend(apiKey.trim());

        const { data, error } = await resend.emails.send({
          from: fromEmail,
          to: [toEmail],
          replyTo: newMessage.email,
          subject: `📬 [Portfolio] ${newMessage.subject} - from ${newMessage.name}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8" />
                <style>
                  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 24px; }
                  .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
                  .header { background: linear-gradient(135deg, #0088cc 0%, #006699 100%); color: #ffffff; padding: 24px 28px; }
                  .header h2 { margin: 0; font-size: 20px; font-weight: 700; }
                  .header p { margin: 6px 0 0; font-size: 13px; opacity: 0.9; }
                  .content { padding: 28px; }
                  .field { margin-bottom: 18px; }
                  .label { font-size: 11px; text-transform: uppercase; font-weight: 700; color: #64748b; letter-spacing: 0.05em; margin-bottom: 4px; }
                  .value { font-size: 15px; font-weight: 600; color: #0f172a; }
                  .message-box { background: #f1f5f9; border-left: 4px solid #0088cc; border-radius: 8px; padding: 16px 20px; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap; margin-top: 8px; }
                  .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 28px; font-size: 12px; color: #94a3b8; text-align: center; }
                  .reply-hint { display: inline-block; margin-top: 12px; padding: 8px 14px; background: #e0f2fe; color: #0369a1; border-radius: 8px; font-size: 13px; font-weight: 600; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h2>New Message from Portfolio Website</h2>
                    <p>Received on ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} (IST)</p>
                  </div>
                  <div class="content">
                    <div class="field">
                      <div class="label">Sender Name</div>
                      <div class="value">${escapeHtml(newMessage.name)}</div>
                    </div>
                    <div class="field">
                      <div class="label">Sender Email</div>
                      <div class="value"><a href="mailto:${escapeHtml(newMessage.email)}" style="color: #0088cc; text-decoration: none;">${escapeHtml(newMessage.email)}</a></div>
                    </div>
                    ${newMessage.company !== 'N/A' ? `
                    <div class="field">
                      <div class="label">Company / Organization</div>
                      <div class="value">${escapeHtml(newMessage.company)}</div>
                    </div>
                    ` : ''}
                    <div class="field">
                      <div class="label">Subject</div>
                      <div class="value">${escapeHtml(newMessage.subject)}</div>
                    </div>
                    <div class="field">
                      <div class="label">Message Content</div>
                      <div class="message-box">${escapeHtml(newMessage.message)}</div>
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                      <span class="reply-hint">💡 Tip: You can click "Reply" directly in your email client to respond to ${escapeHtml(newMessage.name)}.</span>
                    </div>
                  </div>
                  <div class="footer">
                    Sent via Shubham Harad's Engineering Portfolio &bull; Powered by Resend
                  </div>
                </div>
              </body>
            </html>
          `,
        });

        if (error) {
          console.error('[Resend Error]:', error);
          emailError = error.message;
        } else {
          console.log(`[Resend Success] Email dispatched successfully! ID: ${data?.id}`);
          emailSent = true;
        }
      } catch (err) {
        console.error('[Resend Exception]:', err);
        emailError = err.message;
      }
    } else {
      console.warn('⚠️ [Contact Form] RESEND_API_KEY is not set in backend/.env. Message logged to messages.json but email not dispatched.');
    }

    // Success response
    return res.status(201).json({
      success: true,
      emailSent,
      message: `Thank you, ${name}! Your message has been received. Shubham will get back to you shortly at ${email}.`,
      data: {
        id: newMessage.id,
        receivedAt: newMessage.timestamp,
        emailSent,
        needsApiKey: !apiKey || apiKey.trim() === '',
        error: emailError,
      },
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({
      success: false,
      message: 'An internal error occurred while submitting your message. Please reach out directly via email.',
    });
  }
});

// Helper to escape HTML characters
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// GET /api/contact/recent-count - Simple stats
router.get('/recent-count', (req, res) => {
  const messages = getSavedMessages();
  res.json({
    success: true,
    count: messages.length,
  });
});

export default router;
