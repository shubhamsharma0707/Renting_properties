import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import searchRouter from './routes/search.js';

config(); // Load .env

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:4173'] }));
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

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🏠 RentRadar Backend running at http://localhost:${PORT}`);
  console.log(`   Google Maps API: ${process.env.GOOGLE_MAPS_API_KEY ? '✅ configured' : '⚠️  not set (using mock data)'}`);
  console.log(`   SerpAPI:         ${process.env.SERPAPI_KEY ? '✅ configured' : '⚠️  not set (using mock data)'}`);
  console.log(`   Gemini AI:       ${process.env.GEMINI_API_KEY ? '✅ configured' : '⚠️  not set (AI insights disabled)'}\n`);
});

export default app;
