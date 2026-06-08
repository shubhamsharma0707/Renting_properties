/**
 * AI Advice Service — powered by OpenRouter (google/gemma-4-26b-a4b-it:free)
 * Replaces the previous @google/generative-ai (Gemini) integration.
 *
 * OpenRouter endpoint: https://openrouter.ai/api/v1/chat/completions
 * Model: google/gemma-4-26b-a4b-it:free
 */

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = 'google/gemma-4-26b-a4b-it:free';

/**
 * Call OpenRouter chat completions with the given prompt.
 * @param {string} prompt - The user message to send.
 * @returns {Promise<string>} - The assistant's reply text.
 */
async function callOpenRouter(prompt) {
  if (!OPENROUTER_API_KEY) {
    throw new Error('OPENROUTER_API_KEY is not set in environment variables.');
  }

  const response = await fetch(OPENROUTER_BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      // Optional — lets your app appear on OpenRouter leaderboards
      'HTTP-Referer': process.env.SITE_URL || 'http://localhost:5173',
      'X-Title': 'RentRadar',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenRouter API error ${response.status}: ${errorText}`);
  }

  const data = await response.json();

  // Extract the assistant reply
  const text = data?.choices?.[0]?.message?.content;
  if (!text) {
    throw new Error('Unexpected OpenRouter response shape: ' + JSON.stringify(data));
  }

  return text.trim();
}

/**
 * Generate AI-powered rental market advice for a given location and budget.
 *
 * @param {Object} params
 * @param {string} params.location   - City / neighbourhood (e.g. "Koramangala, Bangalore")
 * @param {number} params.budget     - User's monthly budget in INR
 * @param {Object} params.marketData - { avgRent, minRent, maxRent, inBudgetCount, totalCount }
 * @returns {Promise<string>} Markdown-formatted AI advice
 */
export async function getAIAdvice({ location, budget, marketData }) {
  const { avgRent, minRent, maxRent, inBudgetCount, totalCount } = marketData || {};

  const prompt = `
You are RentRadar's AI assistant — a friendly, concise Indian rental market expert.

Location: ${location}
User budget: ₹${budget?.toLocaleString('en-IN') ?? 'N/A'}/month
Market data:
  • Average rent : ₹${avgRent?.toLocaleString('en-IN') ?? 'N/A'}
  • Min rent     : ₹${minRent?.toLocaleString('en-IN') ?? 'N/A'}
  • Max rent     : ₹${maxRent?.toLocaleString('en-IN') ?? 'N/A'}
  • In-budget    : ${inBudgetCount ?? 'N/A'} of ${totalCount ?? 'N/A'} listings

Please provide:
1. **Budget assessment** — Is the budget realistic for this area?
2. **Neighbourhood tips** — 2–3 specific locality suggestions near "${location}" that fit the budget.
3. **Negotiation advice** — One practical tip for negotiating rent in this market.
4. **Watch-outs** — One thing renters commonly overlook in this area.

Keep the response concise (≈150 words). Use ₹ for currency. Respond in markdown.
`.trim();

  try {
    return await callOpenRouter(prompt);
  } catch (err) {
    console.error('[gemini.js] OpenRouter call failed:', err.message);
    // Graceful fallback so the rest of the app still works
    return `**AI insights temporarily unavailable.**\n\nBased on the market data, the average rent in ${location} is ₹${avgRent?.toLocaleString('en-IN') ?? 'N/A'}/month. ${inBudgetCount ?? 0} of ${totalCount ?? 0} listings fall within your ₹${budget?.toLocaleString('en-IN') ?? ''} budget.`;
  }
}

export default { getAIAdvice };
