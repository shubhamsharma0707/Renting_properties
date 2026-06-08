import express from 'express';
import { getPlacesData } from '../services/places.js';
import { getWebSearchRentals } from '../services/websearch.js';
import { generateMockListings, getMockInsights } from '../scrapers/rentData.js';
import { getAIAdvice } from '../services/gemini.js';
import { geocodeLocation } from '../services/geocoder.js';

const router = express.Router();

// Allowed values for type and bhk — reject anything else
const VALID_TYPES = new Set(['all', 'flat', 'house', 'pg', 'studio']);
const VALID_BHK   = new Set(['all', '1', '2', '3']);

/**
 * GET /api/search
 * Query: location, budget, type (flat|house|pg|studio|all), bhk (1|2|3|all)
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

    // Validate budget
    const budgetNum = parseInt(budget, 10);
    if (isNaN(budgetNum) || budgetNum < 1000 || budgetNum > 500_000) {
      return res.status(400).json({ error: 'Budget must be between Rs 1,000 and Rs 5,00,000' });
    }

    // Sanitize type and bhk against allowed values
    const safeType = VALID_TYPES.has(type) ? type : 'all';
    const safeBhk  = VALID_BHK.has(bhk)   ? bhk  : 'all';

    // Trim and cap location length to prevent abuse
    const safeLocation = String(location).trim().slice(0, 120) || 'Koramangala, Bangalore';

    console.log(`\nSearching: "${safeLocation}" | Rs ${budgetNum.toLocaleString('en-IN')} | ${safeType} | ${safeBhk} BHK`);

    let properties = [];
    let center = null;
    let insights = null;
    let dataSource = 'mock';

    const hasGoogleKey = !!process.env.GOOGLE_MAPS_API_KEY;
    const hasSerpKey   = !!process.env.SERPAPI_KEY;

    // ── Step 0: Geocode the location via Nominatim (free, no key needed) ─────
    let geocodedCenter = null;
    try {
      const geo = await geocodeLocation(safeLocation);
      geocodedCenter = { lat: geo.lat, lng: geo.lng };
      center = geocodedCenter;
      console.log(`  Geocoded: ${geo.displayName} -> ${geo.lat.toFixed(4)}, ${geo.lng.toFixed(4)}`);
    } catch (err) {
      console.warn(`  Geocoding failed: ${err.message}`);
    }

    // ── Real Data: Google Places ──────────────────────────────────────────────
    if (hasGoogleKey) {
      try {
        const placesResult = await getPlacesData(safeLocation, budgetNum, safeType);
        if (placesResult.properties.length > 0) {
          properties = placesResult.properties;
          center = placesResult.center || geocodedCenter;
          dataSource = 'google';
          console.log(`  Google Places: ${properties.length} results`);
        }
      } catch (err) {
        console.warn(`  Google Places error: ${err.message}`);
      }
    }

    // ── Real Data: SerpAPI Web Search (for price signals) ────────────────────
    let serpPriceSignal = null;
    if (hasSerpKey) {
      try {
        const serpResults = await getWebSearchRentals(safeLocation, budgetNum, safeBhk);
        if (serpResults.length > 0) {
          // Extract meaningful price signals — exclude prices at or above the budget ceiling
          // (SerpAPI often returns budget as a fallback price for results without explicit prices)
          const validPrices = serpResults
            .map(p => p.price)
            .filter(price => price > 2000 && price < budgetNum * 0.95 && price < 200000);
          if (validPrices.length > 0) {
            serpPriceSignal = Math.round(validPrices.reduce((a, b) => a + b, 0) / validPrices.length);
            console.log(`  SerpAPI price signal: avg Rs ${serpPriceSignal.toLocaleString('en-IN')} from ${validPrices.length} results`);
          } else {
            console.log(`  SerpAPI: no usable price signals found, using city profile`);
          }
          dataSource = 'serp';
        }
      } catch (err) {
        console.warn(`  SerpAPI error: ${err.message}`);
      }
    }

    // ── Always generate rich mock listings with real geocoded center ──────────
    // Mock data always has complete property info (name, address, amenities, contact etc.)
    // SerpAPI is used for price calibration only
    if (properties.length === 0) {
      const mockResult = generateMockListings(safeLocation, budgetNum, safeType, safeBhk, geocodedCenter, serpPriceSignal);
      properties = mockResult.properties;
      center = center || mockResult.center;
      console.log(`  Using ${dataSource === 'serp' ? 'price-calibrated' : 'generated'} mock data: ${properties.length} results`);
    }

    // ── Filter & Sort ─────────────────────────────────────────────────────────
    if (safeType !== 'all') {
      properties = properties.filter(p =>
        p.type?.toLowerCase() === safeType
      );
    }
    if (safeBhk !== 'all') {
      properties = properties.filter(p =>
        String(p.bhk) === safeBhk
      );
    }

    // Sort: in-budget first, then by ascending price
    properties.sort((a, b) => {
      const aIn = a.price <= budgetNum;
      const bIn = b.price <= budgetNum;
      if (aIn && !bIn) return -1;
      if (!aIn && bIn) return 1;
      return a.price - b.price;
    });

    // ── Insights ──────────────────────────────────────────────────────────────
    insights = getMockInsights(properties, budgetNum, safeLocation);

    // ── Default center fallback ───────────────────────────────────────────────
    if (!center) {
      center = { lat: 12.9716, lng: 77.5946 }; // Bangalore fallback
    }

    const pagedProperties = properties.slice(0, 30); // Max 30 per request
    res.json({
      success: true,
      dataSource,
      location: safeLocation,
      budget: budgetNum,
      center,
      properties: pagedProperties,
      insights,
      total: pagedProperties.length
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

  const safeAddress = String(address).trim().slice(0, 120);

  try {
    const result = await geocodeLocation(safeAddress);
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
    const safeLocation = String(location).trim().slice(0, 120);
    const budgetNum = parseInt(budget, 10);
    if (isNaN(budgetNum) || budgetNum < 1000) {
      return res.status(400).json({ error: 'Invalid budget' });
    }

    // Get some properties first for context
    const mockResult = generateMockListings(safeLocation, budgetNum, 'all', 'all');
    const insights   = getMockInsights(mockResult.properties, budgetNum, safeLocation);

    const aiResult = await getAIAdvice({ location: safeLocation, budget: budgetNum, marketData: insights });
    res.json({ success: true, advice: aiResult });
  } catch (err) {
    console.error('AI advice error:', err);
    res.status(500).json({ error: 'AI advice unavailable' });
  }
});

export default router;
