# OpenRouter Migration Notes

## What changed

### 1. `server/services/gemini.js` — **Full rewrite**
- **Removed**: `@google/generative-ai` SDK import and `GoogleGenerativeAI` client
- **Added**: Native `fetch()` call to `https://openrouter.ai/api/v1/chat/completions`
- **Model**: `google/gemma-4-26b-a4b-it:free` (free tier via OpenRouter)
- API key now read from `process.env.OPENROUTER_API_KEY`
- Function signature is **unchanged** — `getAIAdvice({ location, budget, marketData })` — so the rest of the codebase needs no edits

### 2. `.env` — **Key renamed**
```diff
- GEMINI_API_KEY=...
- VITE_GEMINI_KEY=...
+ OPENROUTER_API_KEY=your-openrouter-key-here
+ SITE_URL=http://localhost:5173   # optional, for OpenRouter leaderboard
```

### 3. `package.json` — **Dependency removed**
```diff
- "@google/generative-ai": "^0.24.1",
```
The `@google/generative-ai` package is no longer used.
Run `npm install` after pulling these changes.

---

## How to get your OpenRouter API key
1. Go to https://openrouter.ai/settings/keys
2. Click **Create Key**
3. Copy the key (starts with `sk-or-v1-...`)
4. Paste it in `.env` as `OPENROUTER_API_KEY=sk-or-v1-...`

The `google/gemma-4-26b-a4b-it:free` model is **free** — no billing required.

---

## Files NOT changed
Everything else in the codebase (`server/routes/search.js`, `src/`, etc.) is untouched.
The `gemini.js` export interface is identical, so no call-sites need updating.
