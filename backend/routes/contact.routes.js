import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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

// POST /api/contact - Receive visitor/recruiter inquiries
router.post('/', (req, res) => {
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

    const messages = getSavedMessages();
    messages.unshift(newMessage);

    // Save up to 100 messages locally
    fs.writeFileSync(messagesLogPath, JSON.stringify(messages.slice(0, 100), null, 2), 'utf8');

    console.log(`[Contact Form] New message received from: ${name} (${email}) - Company: ${company || 'N/A'}`);

    return res.status(201).json({
      success: true,
      message: `Thank you, ${name}! Your message has been received. Shubham will get back to you shortly at ${email}.`,
      data: {
        id: newMessage.id,
        receivedAt: newMessage.timestamp,
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

// GET /api/contact/recent-count - Simple stats
router.get('/recent-count', (req, res) => {
  const messages = getSavedMessages();
  res.json({
    success: true,
    count: messages.length,
  });
});

export default router;
