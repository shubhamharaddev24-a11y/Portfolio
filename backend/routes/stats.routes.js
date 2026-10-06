import express from 'express';

const router = express.Router();

const engineerProfile = {
  name: 'Shubham Harad',
  title: 'Full-Stack Software Engineer',
  specialization: 'MERN Stack | Node.js | React | AI Systems | Distributed Queues',
  location: 'Mumbai, India',
  email: 'shubhamharad25@gmail.com',
  phone: '+91-8830331309',
  linkedin: 'https://www.linkedin.com/in/shubham-harad-a25797250',
  github: 'https://github.com/shubhamharad',
  experienceYears: '2+',
  keyMetrics: [
    { label: 'Order Processing Speedup', value: '80%', description: 'Procurement cycle automated with PO/GRN/GST invoicing' },
    { label: 'API Latency Reduction', value: '40%', description: 'Redis rate limiting & optimized MongoDB aggregation pipelines' },
    { label: 'OCR Extraction Accuracy', value: '95%+', description: 'Azure Form Recognizer + custom document validation rules' },
    { label: 'Cart Abandonment Drop', value: '18%', description: 'Streamlined multi-step checkout at Mediaworks' },
    { label: 'Page Load Optimization', value: '35%', description: 'Code splitting, lazy loading, and Redis caching' }
  ],
  techStackSummary: {
    languages: ['JavaScript (ES6+)', 'TypeScript', 'PHP', 'SQL'],
    frontend: ['React.js (React 19)', 'Vite', 'Redux Toolkit', 'Tailwind CSS', 'Material UI (MUI)', 'Radix UI', 'Fabric.js (Canvas)'],
    backend: ['Node.js', 'Express.js', 'RESTful APIs', 'Microservices', 'Core PHP', 'Laravel', 'JWT Auth', 'RBAC'],
    databases: ['MongoDB (Mongoose, Aggregations)', 'MySQL', 'Redis (Caching, Pub/Sub, Rate Limiting)'],
    queuesAndRealtime: ['BullMQ', 'Agenda', 'Node-cron', 'Socket.io'],
    cloudAndDevOps: ['AWS (S3, CloudFront, EC2)', 'Puppeteer', 'Playwright', 'FFmpeg', 'PDF-Lib', 'Docker', 'Git'],
    aiAndIntegrations: ['OpenAI', 'Google Gemini', 'Anthropic Claude', 'Groq', 'PixVerse AI', 'Azure AI Form Recognizer', 'PayU', 'Razorpay', 'Cashfree', 'PhonePe', 'WhatsApp Automation']
  },
  status: 'Open to Full-Stack / Backend Engineering Roles'
};

router.get('/profile', (req, res) => {
  res.json({
    success: true,
    data: engineerProfile,
  });
});

router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    nodeVersion: process.version,
    memoryUsageMB: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
  });
});

export default router;
