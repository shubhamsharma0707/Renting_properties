import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import searchRouter from './routes/search.js';

config(); // Load .env

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

// ─── Allowed Origins ───────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:4173',
  'https://shubhamsharma0707.github.io',  // GitHub Pages
];

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({
  origin: (origin, cb) => {
    // Allow requests with no origin (e.g. curl, Postman, mobile apps)
    if (!origin || ALLOWED_ORIGINS.some(o => origin.startsWith(o))) {
      cb(null, true);
    } else {
      cb(new Error(`CORS: origin "${origin}" not allowed`));
    }
  },
  optionsSuccessStatus: 200,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting — 100 requests per 15 min per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' }
});
app.use('/api', limiter);

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api', searchRouter);

// Health check — returns server status + which API keys are configured
app.get('/health', (_req, res) => res.json({
  status: 'ok',
  timestamp: new Date().toISOString(),
  apis: {
    googleMaps: !!process.env.GOOGLE_MAPS_API_KEY,
    serpapi:    !!process.env.SERPAPI_KEY,
    gemini:     !!process.env.GEMINI_API_KEY,
  }
}));

// ─── 404 catch-all ────────────────────────────────────────────────────────────
app.use((_req, res) => res.status(404).json({ error: 'Not found' }));

// ─── Global error handler ─────────────────────────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error('Unhandled error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🏠 RentRadar Backend running at http://localhost:${PORT}`);
  console.log(`   Google Maps API: ${process.env.GOOGLE_MAPS_API_KEY ? '✅ configured' : '⚠️  not set (using mock data)'}`);
  console.log(`   SerpAPI:         ${process.env.SERPAPI_KEY ? '✅ configured' : '⚠️  not set (using mock data)'}`);
  console.log(`   Gemini AI:       ${process.env.GEMINI_API_KEY ? '✅ configured' : '⚠️  not set (AI insights disabled)'}\n`);
});

export default app;
