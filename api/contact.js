import { Resend } from 'resend';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message, company } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.TO_EMAIL || 'shubhamharad25@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured in environment variables');
      return res.status(500).json({
        success: false,
        message: 'Email service configuration error: RESEND_API_KEY is missing.',
      });
    }

    const resend = new Resend(apiKey.trim());

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email.trim(),
      subject: `📬 [Portfolio] ${subject ? subject.trim() : 'New Contact Message'} - from ${name.trim()}`,
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
                  <div class="value">${escapeHtml(name)}</div>
                </div>
                <div class="field">
                  <div class="label">Sender Email</div>
                  <div class="value"><a href="mailto:${escapeHtml(email)}" style="color: #0088cc; text-decoration: none;">${escapeHtml(email)}</a></div>
                </div>
                ${company ? `
                <div class="field">
                  <div class="label">Company / Organization</div>
                  <div class="value">${escapeHtml(company)}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Subject</div>
                  <div class="value">${escapeHtml(subject || 'Portfolio Inquiry')}</div>
                </div>
                <div class="field">
                  <div class="label">Message Content</div>
                  <div class="message-box">${escapeHtml(message)}</div>
                </div>
                <div style="text-align: center; margin-top: 24px;">
                  <span class="reply-hint">💡 Tip: You can click "Reply" directly in your email client to respond to ${escapeHtml(name)}.</span>
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
      return res.status(400).json({
        success: false,
        message: error.message || 'Failed to send email via Resend.',
      });
    }

    return res.status(201).json({
      success: true,
      message: `Thank you, ${name}! Your message has been received. Shubham will get back to you shortly at ${email}.`,
      data: {
        id: data?.id,
        receivedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Server error in /api/contact:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'An internal error occurred while submitting your message.',
    });
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
