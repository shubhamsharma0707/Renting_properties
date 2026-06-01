import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = process.env.GEMINI_API_KEY
  ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  : null;

/**
 * Ask Gemini for smart AI advice about a rental search
 * @param {string} location
 * @param {number} budget
 * @param {object[]} properties - top properties found
 * @param {object} insights - market insights
 */
export async function getAIAdvice(location, budget, properties, insights) {
  if (!genAI) {
    return {
      advice: null,
      tip: null,
      error: 'Gemini API key not configured'
    };
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const topProps = properties.slice(0, 5).map(p =>
      `- ${p.name}: ₹${p.price.toLocaleString('en-IN')}/mo, ${p.bhk} BHK ${p.type}, ${p.area || '?'} sqft`
    ).join('\n');

    const prompt = `
You are a helpful Indian rental market expert. A user is searching for rental property with this info:

Location: ${location}
Monthly Budget: ₹${budget.toLocaleString('en-IN')}
Average rent in area: ₹${insights?.avgPrice?.toLocaleString('en-IN') || 'unknown'}
Properties found in budget: ${insights?.inBudgetCount || 0} out of ${insights?.totalCount || 0}

Top listings found:
${topProps || 'No listings yet'}

Give TWO things in your response, formatted EXACTLY like this:
ADVICE: [1-2 sentence practical advice about this rental search — is the budget realistic? What should they know about this area?]
TIP: [One quick actionable tip for a student or renter in this situation]

Keep it casual, helpful, and under 60 words total. Use ₹ for rupees.
`;

    const result = await model.generateContent(prompt);
    const text   = result.response.text().trim();

    const adviceMatch = text.match(/ADVICE:\s*(.+?)(?=TIP:|$)/s);
    const tipMatch    = text.match(/TIP:\s*(.+)/s);

    return {
      advice: adviceMatch?.[1]?.trim() || text,
      tip:    tipMatch?.[1]?.trim() || null,
    };
  } catch (err) {
    console.warn('Gemini AI error:', err.message);
    return { advice: null, tip: null, error: err.message };
  }
}
