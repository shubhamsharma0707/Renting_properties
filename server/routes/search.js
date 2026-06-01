import express from 'express';
import { getPlacesData } from '../services/places.js';
import { getWebSearchRentals } from '../services/websearch.js';
import { generateMockListings, getMockInsights } from '../scrapers/rentData.js';
import { getAIAdvice } from '../services/gemini.js';

const router = express.Router();

/**
 * GET /api/search
 * Query: location, budget, type (flat|house|pg|studio), bhk (1|2|3)
 * Returns: { properties: [], insights: {}, center: { lat, lng } }
 */
router.get('/search', async (req, res) => {
  try {
    const {
      location = 'Koramangala, Bangalore',
      budget = '25000',
      type = 'all',
      bhk = 'all'
    } = req.query;

    const budgetNum = parseInt(budget, 10);
    if (isNaN(budgetNum) || budgetNum < 1000) {
      return res.status(400).json({ error: 'Invalid budget value' });
    }

    console.log(`\n🔍 Searching: "${location}" | ₹${budgetNum.toLocaleString('en-IN')} | ${type} | ${bhk} BHK`);

    let properties = [];
    let center = null;
    let insights = null;
    let dataSource = 'mock';

    const hasGoogleKey = !!process.env.GOOGLE_MAPS_API_KEY;
    const hasSerpKey = !!process.env.SERPAPI_KEY;

    // ── Real Data: Google Places ──────────────────────────────────────────────
    if (hasGoogleKey) {
      try {
        const placesResult = await getPlacesData(location, budgetNum, type);
        if (placesResult.properties.length > 0) {
          properties = placesResult.properties;
          center = placesResult.center;
          dataSource = 'google';
          console.log(`   ✅ Google Places: ${properties.length} results`);
        }
      } catch (err) {
        console.warn(`   ⚠️  Google Places error: ${err.message}`);
      }
    }

    // ── Real Data: SerpAPI Web Search ─────────────────────────────────────────
    if (hasSerpKey) {
      try {
        const serpResults = await getWebSearchRentals(location, budgetNum, bhk);
        if (serpResults.length > 0) {
          // Merge or add unique serp results
          const serpIds = new Set(properties.map(p => p.id));
          const newResults = serpResults.filter(p => !serpIds.has(p.id));
          properties = [...properties, ...newResults];
          dataSource = hasGoogleKey ? 'google+serp' : 'serp';
          console.log(`   ✅ SerpAPI: ${serpResults.length} results`);
        }
      } catch (err) {
        console.warn(`   ⚠️  SerpAPI error: ${err.message}`);
      }
    }

    // ── Fallback: Smart Mock Data ─────────────────────────────────────────────
    if (properties.length === 0) {
      const mockResult = generateMockListings(location, budgetNum, type, bhk);
      properties = mockResult.properties;
      center = center || mockResult.center;
      dataSource = 'mock';
      console.log(`   ℹ️  Using generated mock data: ${properties.length} results`);
    }

    // ── Filter & Sort ─────────────────────────────────────────────────────────
    if (type !== 'all') {
      properties = properties.filter(p =>
        p.type?.toLowerCase() === type.toLowerCase()
      );
    }
    if (bhk !== 'all') {
      properties = properties.filter(p =>
        String(p.bhk) === String(bhk)
      );
    }

    // Sort: in-budget first, then by price
    properties.sort((a, b) => {
      const aInBudget = a.price <= budgetNum;
      const bInBudget = b.price <= budgetNum;
      if (aInBudget && !bInBudget) return -1;
      if (!aInBudget && bInBudget) return 1;
      return a.price - b.price;
    });

    // ── Insights ──────────────────────────────────────────────────────────────
    insights = getMockInsights(properties, budgetNum, location);

    // ── Default center if still null ─────────────────────────────────────────
    if (!center) {
      center = { lat: 12.9716, lng: 77.5946 }; // Bangalore default
    }

    res.json({
      success: true,
      dataSource,
      location,
      budget: budgetNum,
      center,
      properties: properties.slice(0, 30), // Max 30 per request
      insights,
      total: properties.length
    });

  } catch (err) {
    console.error('Search route error:', err);
    res.status(500).json({ error: 'Failed to fetch rental data. Please try again.' });
  }
});

/**
 * GET /api/geocode?address=...
 * Returns lat/lng for a given address (uses mock fallback if no Google key)
 */
router.get('/geocode', async (req, res) => {
  const { address } = req.query;
  if (!address) return res.status(400).json({ error: 'Address required' });

  if (process.env.GOOGLE_MAPS_API_KEY) {
    try {
      const { default: axios } = await import('axios');
      const url = `https://maps.googleapis.com/maps/api/geocode/json`;
      const resp = await axios.get(url, {
        params: { address, key: process.env.GOOGLE_MAPS_API_KEY }
      });
      if (resp.data.results?.[0]) {
        const loc = resp.data.results[0].geometry.location;
        return res.json({ lat: loc.lat, lng: loc.lng, formatted: resp.data.results[0].formatted_address });
      }
    } catch (err) {
      console.warn('Geocode error:', err.message);
    }
  }

  // Mock geocode for popular Indian cities
  const cityCoords = {
    bangalore: { lat: 12.9716, lng: 77.5946 },
    mumbai: { lat: 19.0760, lng: 72.8777 },
    delhi: { lat: 28.6139, lng: 77.2090 },
    hyderabad: { lat: 17.3850, lng: 78.4867 },
    pune: { lat: 18.5204, lng: 73.8567 },
    chennai: { lat: 13.0827, lng: 80.2707 },
    kolkata: { lat: 22.5726, lng: 88.3639 },
    ahmedabad: { lat: 23.0225, lng: 72.5714 },
    koramangala: { lat: 12.9279, lng: 77.6271 },
    'indiranagar': { lat: 12.9784, lng: 77.6408 },
    'bandra': { lat: 19.0596, lng: 72.8295 },
    'andheri': { lat: 19.1136, lng: 72.8697 },
    'gurgaon': { lat: 28.4595, lng: 77.0266 },
    'noida': { lat: 28.5355, lng: 77.3910 },
  };

  const key = address.toLowerCase().split(',')[0].trim();
  const coords = cityCoords[key] || { lat: 12.9716, lng: 77.5946 };
  res.json({ ...coords, formatted: address });
});

/**
 * GET /api/ai-advice?location=...&budget=...
 * Returns Gemini AI advice about the rental search
 */
router.get('/ai-advice', async (req, res) => {
  try {
    const { location = 'Bangalore', budget = '20000' } = req.query;
    const budgetNum = parseInt(budget, 10);

    // Get some properties first for context
    const mockResult = generateMockListings(location, budgetNum, 'all', 'all');
    const insights   = getMockInsights(mockResult.properties, budgetNum, location);

    const aiResult = await getAIAdvice(location, budgetNum, mockResult.properties, insights);
    res.json({ success: true, ...aiResult });
  } catch (err) {
    console.error('AI advice error:', err);
    res.status(500).json({ error: 'AI advice unavailable' });
  }
});

export default router;
