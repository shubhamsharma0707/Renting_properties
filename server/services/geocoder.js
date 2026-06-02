import axios from 'axios';

/**
 * geocoder.js — Free real-time geocoding via OpenStreetMap Nominatim
 * No API key required. Works for ANY location worldwide.
 */

const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search';

// Simple in-memory cache to avoid repeat requests for same locations
const geoCache = new Map();

/**
 * Geocode any location string → { lat, lng, displayName }
 * Uses Nominatim (free, no key needed) with Google Maps API as optional upgrade.
 *
 * @param {string} location - e.g. "Bandra, Mumbai" or "Sector 17, Chandigarh"
 * @returns {{ lat: number, lng: number, displayName: string }}
 */
export async function geocodeLocation(location) {
  const cacheKey = location.toLowerCase().trim();
  if (geoCache.has(cacheKey)) return geoCache.get(cacheKey);

  // ── Option 1: Google Maps API (if key available) ──────────────────────────
  if (process.env.GOOGLE_MAPS_API_KEY) {
    try {
      const resp = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: { address: location, key: process.env.GOOGLE_MAPS_API_KEY },
        timeout: 5000,
      });
      if (resp.data.status === 'OK' && resp.data.results?.[0]) {
        const r = resp.data.results[0];
        const result = {
          lat: r.geometry.location.lat,
          lng: r.geometry.location.lng,
          displayName: r.formatted_address,
        };
        geoCache.set(cacheKey, result);
        return result;
      }
    } catch (e) {
      console.warn('[geocoder] Google Maps failed, falling back to Nominatim:', e.message);
    }
  }

  // ── Option 2: Nominatim (always free, no key) ────────────────────────────
  try {
    const resp = await axios.get(NOMINATIM_URL, {
      params: {
        q: location,
        format: 'json',
        limit: 1,
        countrycodes: 'in',      // Bias towards India
        addressdetails: 1,
      },
      headers: {
        'User-Agent': 'RentRadar/1.0 (rental property finder app)',
      },
      timeout: 8000,
    });

    if (resp.data && resp.data.length > 0) {
      const place = resp.data[0];
      const result = {
        lat: parseFloat(place.lat),
        lng: parseFloat(place.lon),
        displayName: place.display_name,
      };
      geoCache.set(cacheKey, result);
      console.log(`[geocoder] Nominatim found "${location}" → ${result.lat}, ${result.lng}`);
      return result;
    }

    // Try without country restriction for non-Indian locations
    const resp2 = await axios.get(NOMINATIM_URL, {
      params: { q: location, format: 'json', limit: 1 },
      headers: { 'User-Agent': 'RentRadar/1.0' },
      timeout: 8000,
    });
    if (resp2.data && resp2.data.length > 0) {
      const place = resp2.data[0];
      const result = {
        lat: parseFloat(place.lat),
        lng: parseFloat(place.lon),
        displayName: place.display_name,
      };
      geoCache.set(cacheKey, result);
      return result;
    }
  } catch (e) {
    console.warn('[geocoder] Nominatim failed:', e.message);
  }

  // ── Fallback: built-in city coordinates ─────────────────────────────────
  const fallback = FALLBACK_COORDS[detectCityKey(location)] || FALLBACK_COORDS.bangalore;
  console.warn(`[geocoder] Using hardcoded fallback for: "${location}"`);
  return { ...fallback, displayName: location };
}

// ── Fallback coordinates for major Indian cities ──────────────────────────────
const FALLBACK_COORDS = {
  bangalore:  { lat: 12.9716, lng: 77.5946 },
  mumbai:     { lat: 19.0760, lng: 72.8777 },
  delhi:      { lat: 28.6139, lng: 77.2090 },
  hyderabad:  { lat: 17.3850, lng: 78.4867 },
  pune:       { lat: 18.5204, lng: 73.8567 },
  chennai:    { lat: 13.0827, lng: 80.2707 },
  kolkata:    { lat: 22.5726, lng: 88.3639 },
  ahmedabad:  { lat: 23.0225, lng: 72.5714 },
  gurgaon:    { lat: 28.4595, lng: 77.0266 },
  noida:      { lat: 28.5355, lng: 77.3910 },
  chandigarh: { lat: 30.7333, lng: 76.7794 },
  jaipur:     { lat: 26.9124, lng: 75.7873 },
  surat:      { lat: 21.1702, lng: 72.8311 },
  lucknow:    { lat: 26.8467, lng: 80.9462 },
  indore:     { lat: 22.7196, lng: 75.8577 },
  bhopal:     { lat: 23.2599, lng: 77.4126 },
  nagpur:     { lat: 21.1458, lng: 79.0882 },
  coimbatore: { lat: 11.0168, lng: 76.9558 },
  kochi:      { lat: 9.9312, lng: 76.2673 },
  vizag:      { lat: 17.6868, lng: 83.2185 },
};

const CITY_KEYWORDS = {
  bangalore:  ['bangalore', 'bengaluru', 'koramangala', 'indiranagar', 'whitefield', 'hsr', 'btm', 'marathahalli', 'bellandur', 'hebbal', 'jayanagar', 'jp nagar', 'yelahanka'],
  mumbai:     ['mumbai', 'bombay', 'bandra', 'andheri', 'powai', 'thane', 'malad', 'goregaon', 'borivali', 'navi mumbai', 'dadar'],
  delhi:      ['delhi', 'new delhi', 'lajpat', 'saket', 'dwarka', 'rohini', 'vasant kunj', 'greater kailash', 'south delhi'],
  gurgaon:    ['gurgaon', 'gurugram', 'dlf', 'sohna', 'golf course', 'cyber city', 'sector 56'],
  noida:      ['noida', 'greater noida', 'sector 18', 'sector 62'],
  hyderabad:  ['hyderabad', 'hyd', 'madhapur', 'gachibowli', 'kondapur', 'hitech', 'begumpet', 'banjara', 'jubilee hills'],
  pune:       ['pune', 'kothrud', 'baner', 'hinjewadi', 'viman nagar', 'wakad', 'hadapsar', 'aundh'],
  chennai:    ['chennai', 'madras', 'adyar', 'anna nagar', 't nagar', 'velachery', 'omr', 'porur', 'nungambakkam'],
  kolkata:    ['kolkata', 'calcutta', 'salt lake', 'park street', 'ballygunge', 'new town', 'howrah'],
  ahmedabad:  ['ahmedabad', 'amdavad', 'sg highway', 'prahlad nagar', 'bopal'],
  jaipur:     ['jaipur', 'malviya nagar', 'vaishali nagar', 'mansarovar'],
  chandigarh: ['chandigarh', 'mohali', 'panchkula', 'sector 17'],
  kochi:      ['kochi', 'cochin', 'ernakulam', 'marine drive', 'aluva'],
};

function detectCityKey(location) {
  const lower = location.toLowerCase();
  for (const [city, keywords] of Object.entries(CITY_KEYWORDS)) {
    if (keywords.some(k => lower.includes(k))) return city;
  }
  return 'bangalore';
}
