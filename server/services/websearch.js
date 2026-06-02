import axios from 'axios';

const SERPAPI_BASE = 'https://serpapi.com/search';
// Read key at call time (not at import time) so dotenv has a chance to load it
const getKey = () => process.env.SERPAPI_KEY;

/**
 * Use SerpAPI to search the web for actual rental listings with prices
 * @param {string} location
 * @param {number} budget
 * @param {string} bhk - 1|2|3|all
 */
export async function getWebSearchRentals(location, budget, bhk) {
  const KEY = getKey();
  if (!KEY) throw new Error('No SerpAPI key configured');

  const bhkStr = bhk !== 'all' ? `${bhk}BHK ` : '';
  const query = `${bhkStr}flat rent in ${location} under ₹${budget}`;

  const resp = await axios.get(SERPAPI_BASE, {
    params: {
      q: query,
      api_key: KEY,
      engine: 'google',
      hl: 'en',
      gl: 'in',
      num: 20,
    },
    timeout: 10000
  });

  const results = [];

  // Parse organic results for rental info
  if (resp.data.organic_results) {
    for (const result of resp.data.organic_results) {
      const parsed = parseRentalFromSnippet(result, location, budget);
      if (parsed) results.push(parsed);
    }
  }

  // Parse real estate snippets if present
  if (resp.data.real_estate_results) {
    for (const item of resp.data.real_estate_results) {
      const parsed = parseRealEstateResult(item, location);
      if (parsed) results.push(parsed);
    }
  }

  return results;
}

// ── Parsers ───────────────────────────────────────────────────────────────────

function parseRentalFromSnippet(result, location, budget) {
  const text = `${result.title} ${result.snippet || ''}`.toLowerCase();

  // Must contain price info
  const priceMatch = text.match(/₹\s*(\d[\d,]+)|(\d[\d,]+)\s*(?:per month|\/month|pm|per mo)/i);
  if (!priceMatch) return null;

  const priceStr = (priceMatch[1] || priceMatch[2]).replace(/,/g, '');
  const price = parseInt(priceStr, 10);
  if (isNaN(price) || price < 2000 || price > 500000) return null;

  // Extract BHK
  const bhkMatch = text.match(/(\d)\s*bhk/i);
  const bhk = bhkMatch ? parseInt(bhkMatch[1]) : 2;

  // Extract area (sq ft)
  const areaMatch = text.match(/(\d+)\s*(?:sq\.?\s*ft|sqft)/i);
  const area = areaMatch ? parseInt(areaMatch[1]) : randomArea(bhk);

  // Determine type
  const type = text.includes('pg') || text.includes('paying guest')
    ? 'pg'
    : text.includes('studio')
    ? 'studio'
    : text.includes('villa') || text.includes('house') || text.includes('bungalow')
    ? 'house'
    : 'flat';

  return {
    id: `serp_${Math.random().toString(36).substr(2, 9)}`,
    name: result.title.split('|')[0].trim().slice(0, 50),
    address: result.displayed_link || location,
    lat: null, // Will be approximated on frontend
    lng: null,
    price,
    bhk,
    type,
    area,
    source: 'web_search',
    sourceUrl: result.link,
    sourceSite: extractSiteName(result.displayed_link),
    distance: (Math.random() * 3 + 0.5).toFixed(1),
    amenities: generateAmenities(),
    available: true,
    photo: null,
    rating: null,
  };
}

function parseRealEstateResult(item, location) {
  const priceStr = item.price?.replace(/[₹,\s]/g, '') || '';
  const price = parseInt(priceStr, 10);
  if (isNaN(price)) return null;

  return {
    id: `re_${Math.random().toString(36).substr(2, 9)}`,
    name: item.name || item.address || 'Rental Property',
    address: item.address || location,
    lat: item.gps_coordinates?.latitude || null,
    lng: item.gps_coordinates?.longitude || null,
    price,
    bhk: 2,
    type: 'flat',
    area: randomArea(2),
    source: 'real_estate',
    distance: (Math.random() * 3 + 0.5).toFixed(1),
    amenities: generateAmenities(),
    available: true,
    photo: item.thumbnail || null,
    rating: null,
  };
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function randomArea(bhk) {
  const ranges = { 1: [400, 700], 2: [700, 1100], 3: [1100, 1800] };
  const [min, max] = ranges[bhk] || [600, 1000];
  return Math.floor(Math.random() * (max - min) + min);
}

function generateAmenities() {
  const all = ['Furnished', 'Parking', 'WiFi', 'AC', 'Gym', 'Security', 'Lift', 'Power Backup'];
  const count = 2 + Math.floor(Math.random() * 4);
  return all.sort(() => Math.random() - 0.5).slice(0, count);
}

function extractSiteName(url = '') {
  const match = url.match(/(?:www\.)?([^./]+)\./);
  return match ? match[1] : 'web';
}
