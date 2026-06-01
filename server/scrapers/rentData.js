/**
 * rentData.js — Smart Mock Data Generator + Insights
 *
 * Generates statistically realistic rental listings based on:
 * - Indian city rental market averages
 * - Location-based price adjustments
 * - Budget range
 */

// ── City Price Profiles ───────────────────────────────────────────────────────
const CITY_PROFILES = {
  bangalore: {
    coords: { lat: 12.9716, lng: 77.5946 },
    base1bhk: 15000, base2bhk: 25000, base3bhk: 40000,
    localities: ['Koramangala', 'Indiranagar', 'HSR Layout', 'Whitefield', 'Marathahalli', 'BTM Layout', 'Bellandur', 'Electronic City'],
    keywords: ['koramangala', 'indiranagar', 'hsr', 'whitefield', 'marathahalli', 'btm', 'bellandur', 'electronic city', 'bengaluru', 'bangalore']
  },
  mumbai: {
    coords: { lat: 19.0760, lng: 72.8777 },
    base1bhk: 25000, base2bhk: 45000, base3bhk: 75000,
    localities: ['Bandra', 'Andheri', 'Powai', 'Thane', 'Navi Mumbai', 'Malad', 'Goregaon', 'Borivali'],
    keywords: ['bandra', 'andheri', 'powai', 'thane', 'navi mumbai', 'malad', 'mumbai', 'bombay']
  },
  delhi: {
    coords: { lat: 28.6139, lng: 77.2090 },
    base1bhk: 12000, base2bhk: 20000, base3bhk: 35000,
    localities: ['Lajpat Nagar', 'Saket', 'Dwarka', 'Rohini', 'Greater Kailash', 'Vasant Kunj'],
    keywords: ['lajpat', 'saket', 'dwarka', 'rohini', 'delhi', 'new delhi']
  },
  gurgaon: {
    coords: { lat: 28.4595, lng: 77.0266 },
    base1bhk: 15000, base2bhk: 28000, base3bhk: 50000,
    localities: ['DLF Phase 1', 'Sohna Road', 'Golf Course Road', 'Sector 56', 'Cyber City'],
    keywords: ['gurgaon', 'gurugram', 'dlf', 'sohna', 'golf course']
  },
  hyderabad: {
    coords: { lat: 17.3850, lng: 78.4867 },
    base1bhk: 12000, base2bhk: 20000, base3bhk: 32000,
    localities: ['Madhapur', 'Gachibowli', 'Kondapur', 'Hitech City', 'Begumpet', 'Banjara Hills'],
    keywords: ['madhapur', 'gachibowli', 'kondapur', 'hitech', 'hyderabad', 'hyd']
  },
  pune: {
    coords: { lat: 18.5204, lng: 73.8567 },
    base1bhk: 12000, base2bhk: 20000, base3bhk: 32000,
    localities: ['Kothrud', 'Baner', 'Hinjewadi', 'Viman Nagar', 'Wakad', 'Hadapsar'],
    keywords: ['kothrud', 'baner', 'hinjewadi', 'viman', 'wakad', 'pune']
  },
  chennai: {
    coords: { lat: 13.0827, lng: 80.2707 },
    base1bhk: 10000, base2bhk: 18000, base3bhk: 28000,
    localities: ['Adyar', 'Anna Nagar', 'T. Nagar', 'Velachery', 'OMR', 'Porur'],
    keywords: ['adyar', 'anna nagar', 'tnagar', 't nagar', 'velachery', 'omr', 'chennai', 'madras']
  }
};

const PROPERTY_NAMES = [
  'Sunrise Residency', 'Green Valley Apartments', 'Urban Nest', 'Sky Heights',
  'Park View Enclave', 'Comfort Inn', 'Metro Homes', 'Royal Garden Apartments',
  'Emerald Heights', 'Silver Oaks', 'The Grand Residency', 'Lotus Apartments',
  'Blue Bell Heights', 'Maple Residency', 'Phoenix Towers', 'Fortune Residency',
  'Galaxy Apartments', 'Golden Gate Residency', 'Harmony Heights', 'Ivory Towers'
];

const ALL_AMENITIES = ['Furnished', 'Parking', 'WiFi', 'AC', 'Gym', 'Security', 'Lift', 'Power Backup', 'Water 24/7', 'Gas Pipeline', 'CCTV'];

// ── Main Generator ────────────────────────────────────────────────────────────

/**
 * Generate mock rental listings for a given location + budget
 */
export function generateMockListings(location, budget, type = 'all', bhk = 'all') {
  const profile = detectCityProfile(location);
  const center = profile.coords;
  const count = 16 + Math.floor(Math.random() * 8); // 16-24 listings

  const properties = [];
  const usedNames = new Set();

  for (let i = 0; i < count; i++) {
    const bhkNum = bhk !== 'all' ? parseInt(bhk) : pickBHK();
    const propType = type !== 'all' ? type : pickType();

    const name = pickUnique(PROPERTY_NAMES, usedNames);
    const locality = profile.localities[Math.floor(Math.random() * profile.localities.length)];

    // Price: based on city profile + BHK + variance
    const basePrice = getBHKBase(profile, bhkNum, propType);
    const variance = 0.75 + Math.random() * 0.5; // ±25% variance
    const price = Math.round((basePrice * variance) / 500) * 500;

    // Position: scatter around center within ~3km radius
    const lat = center.lat + (Math.random() - 0.5) * 0.06;
    const lng = center.lng + (Math.random() - 0.5) * 0.06;
    const distance = (Math.random() * 3.5 + 0.3).toFixed(1);

    // Area
    const area = generateArea(bhkNum);

    // Amenities
    const amenityCount = 2 + Math.floor(Math.random() * 5);
    const amenities = [...ALL_AMENITIES].sort(() => Math.random() - 0.5).slice(0, amenityCount);

    properties.push({
      id: `mock_${i}_${Date.now()}`,
      name: `${name}`,
      address: `${locality}, ${profile.city || location.split(',')[0]}`,
      lat,
      lng,
      price,
      bhk: bhkNum,
      type: propType,
      area,
      source: 'curated',
      distance,
      amenities,
      available: Math.random() > 0.15,
      photo: null,
      rating: (3.5 + Math.random() * 1.5).toFixed(1),
      floor: `${Math.floor(Math.random() * 12) + 1}/${12 + Math.floor(Math.random() * 8)}`,
      deposit: price * (2 + Math.floor(Math.random() * 4)),
      contactName: randomContactName(),
      contactPhone: randomPhone(),
    });
  }

  return { properties, center };
}

/**
 * Generate market insights from the property list
 */
export function getMockInsights(properties, budget, location) {
  if (!properties.length) {
    return {
      avgPrice: 0, medianPrice: 0, minPrice: 0, maxPrice: 0,
      inBudgetCount: 0, totalCount: 0, budgetPercentile: 50,
      recommendation: 'No properties found. Try expanding your search area.',
      marketTrend: 'stable'
    };
  }

  const prices = properties.map(p => p.price).sort((a, b) => a - b);
  const avgPrice = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);
  const medianPrice = prices[Math.floor(prices.length / 2)];
  const minPrice = prices[0];
  const maxPrice = prices[prices.length - 1];
  const inBudgetCount = prices.filter(p => p <= budget).length;

  // Where does the user's budget land in the market?
  const budgetPercentile = Math.round((prices.filter(p => p <= budget).length / prices.length) * 100);

  let recommendation;
  if (budgetPercentile >= 70) {
    recommendation = `Great budget! You have access to ${inBudgetCount} properties including premium options.`;
  } else if (budgetPercentile >= 40) {
    recommendation = `Decent budget. ${inBudgetCount} properties fit your range. Consider 1BHK for more choices.`;
  } else {
    recommendation = `Budget is tight for ${location}. Avg rent here is ₹${avgPrice.toLocaleString('en-IN')}. PG or shared accommodation recommended.`;
  }

  return {
    avgPrice,
    medianPrice,
    minPrice,
    maxPrice,
    inBudgetCount,
    totalCount: properties.length,
    budgetPercentile,
    recommendation,
    marketTrend: Math.random() > 0.5 ? 'rising' : 'stable',
    trendPercent: (Math.random() * 8 + 2).toFixed(1),
  };
}

// ── Internal Helpers ─────────────────────────────────────────────────────────

function detectCityProfile(location) {
  const lower = location.toLowerCase();
  for (const [city, profile] of Object.entries(CITY_PROFILES)) {
    if (profile.keywords.some(k => lower.includes(k))) {
      return { ...profile, city };
    }
  }
  // Default: Bangalore
  return { ...CITY_PROFILES.bangalore, city: 'Bangalore' };
}

function getBHKBase(profile, bhk, type) {
  let base;
  if (bhk === 1) base = profile.base1bhk;
  else if (bhk === 2) base = profile.base2bhk;
  else base = profile.base3bhk;

  const typeMultipliers = { flat: 1.0, house: 1.25, pg: 0.45, studio: 0.65 };
  return base * (typeMultipliers[type] || 1.0);
}

function pickBHK() {
  const r = Math.random();
  if (r < 0.3) return 1;
  if (r < 0.72) return 2;
  return 3;
}

function pickType() {
  const r = Math.random();
  if (r < 0.55) return 'flat';
  if (r < 0.75) return 'house';
  if (r < 0.88) return 'pg';
  return 'studio';
}

function generateArea(bhk) {
  const ranges = { 1: [380, 650], 2: [650, 1100], 3: [1050, 1800] };
  const [min, max] = ranges[bhk] || [500, 900];
  return Math.floor(Math.random() * (max - min) + min);
}

function pickUnique(arr, used) {
  const available = arr.filter(x => !used.has(x));
  if (!available.length) used.clear();
  const pick = available[Math.floor(Math.random() * available.length)] || arr[0];
  used.add(pick);
  return pick;
}

const FIRST_NAMES = ['Rahul', 'Priya', 'Amit', 'Neha', 'Sanjay', 'Anita', 'Vijay', 'Sunita', 'Ravi', 'Kavita'];
const LAST_NAMES = ['Sharma', 'Gupta', 'Patel', 'Singh', 'Kumar', 'Reddy', 'Nair', 'Joshi', 'Mehta', 'Shah'];

function randomContactName() {
  return `${FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)]} ${LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)]}`;
}

function randomPhone() {
  return `+91 ${[6, 7, 8, 9][Math.floor(Math.random() * 4)]}${Math.floor(Math.random() * 900000000 + 100000000)}`;
}
