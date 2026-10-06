import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.routes.js';
import simulationRoutes from './routes/apiSimulation.routes.js';
import statsRoutes from './routes/stats.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

// Middlewares
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Logger
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl} - Status: ${res.statusCode} (${duration}ms)`);
  });
  next();
});

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/simulation', simulationRoutes);
app.use('/api/stats', statsRoutes);

// Root Health & API Explorer Index
app.get('/api', (req, res) => {
  res.json({
    message: 'Shubham Harad Portfolio API Gateway is Running',
    version: '1.0.0',
    endpoints: {
      profile: '/api/stats/profile',
      health: '/api/stats/health',
      contact: 'POST /api/contact',
      simulationBGV: 'POST /api/simulation/bgv-verify',
      simulationAuction: 'POST /api/simulation/auction-bid',
      simulationQueues: 'GET /api/simulation/queue-metrics',
    },
    engineer: 'Shubham Harad | Full-Stack Software Engineer',
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Portfolio Backend Server running on http://localhost:${PORT}`);
    console.log(`📡 API Health Check available at http://localhost:${PORT}/api`);
  });
}

export default app;
