import express from 'express';
import { getPlacesData } from '../services/places.js';
import { getWebSearchRentals } from '../services/websearch.js';
import { generateMockListings, getMockInsights } from '../scrapers/rentData.js';
import { getAIAdvice } from '../services/gemini.js';
import { geocodeLocation } from '../services/geocoder.js';

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

    // ── Step 0: Geocode the location via Nominatim (free, no key needed) ─────
    let geocodedCenter = null;
    try {
      const geo = await geocodeLocation(location);
      geocodedCenter = { lat: geo.lat, lng: geo.lng };
      center = geocodedCenter;
      console.log(`   📍 Geocoded: ${geo.displayName} → ${geo.lat.toFixed(4)}, ${geo.lng.toFixed(4)}`);
    } catch (err) {
      console.warn(`   ⚠️  Geocoding failed: ${err.message}`);
    }

    // ── Real Data: Google Places ──────────────────────────────────────────────
    if (hasGoogleKey) {
      try {
        const placesResult = await getPlacesData(location, budgetNum, type);
        if (placesResult.properties.length > 0) {
          properties = placesResult.properties;
          center = placesResult.center || geocodedCenter;
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
          // Approximate lat/lng for serp results that don't have coords
          const serpWithCoords = serpResults.map((p, i) => {
            if (!p.lat && geocodedCenter) {
              // Scatter around geocoded center
              const latOff = (Math.random() - 0.5) * 0.04;
              const lngOff = (Math.random() - 0.5) * 0.04;
              return { ...p, lat: geocodedCenter.lat + latOff, lng: geocodedCenter.lng + lngOff };
            }
            return p;
          });

          const existingIds = new Set(properties.map(p => p.id));
          const newResults = serpWithCoords.filter(p => !existingIds.has(p.id));
          properties = [...properties, ...newResults];
          dataSource = hasGoogleKey ? 'google+serp' : 'serp';
          console.log(`   ✅ SerpAPI: ${serpResults.length} results`);
        }
      } catch (err) {
        console.warn(`   ⚠️  SerpAPI error: ${err.message}`);
      }
    }

    // ── Fallback: Smart Mock Data with REAL coordinates ───────────────────────
    if (properties.length === 0) {
      const mockResult = generateMockListings(location, budgetNum, type, bhk, geocodedCenter);
      properties = mockResult.properties;
      center = center || mockResult.center;
      dataSource = 'mock';
      console.log(`   ℹ️  Using generated mock data (centered at real location): ${properties.length} results`);
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
 * Returns lat/lng for a given address using Nominatim (free, no key needed)
 */
router.get('/geocode', async (req, res) => {
  const { address } = req.query;
  if (!address) return res.status(400).json({ error: 'Address required' });

  try {
    const result = await geocodeLocation(address);
    res.json({ lat: result.lat, lng: result.lng, formatted: result.displayName });
  } catch (err) {
    console.warn('Geocode error:', err.message);
    res.status(500).json({ error: 'Geocoding failed' });
  }
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
