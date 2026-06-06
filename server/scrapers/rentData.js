/**
 * rentData.js — Smart Mock Data Generator + Insights
 *
 * Generates statistically realistic rental listings based on:
 * - Indian city rental market averages
 * - Location-based price adjustments
 * - Budget range
 * - Real geocoded center coordinates (from Nominatim/Google)
 */

// ── City Price Profiles ───────────────────────────────────────────────────────
const CITY_PROFILES = {
  bangalore: {
    coords: { lat: 12.9716, lng: 77.5946 },
    base1bhk: 15000, base2bhk: 25000, base3bhk: 40000,
    localities: ['Koramangala', 'Indiranagar', 'HSR Layout', 'Whitefield', 'Marathahalli', 'BTM Layout', 'Bellandur', 'Electronic City', 'Hebbal', 'Yelahanka', 'JP Nagar', 'Jayanagar'],
    keywords: ['koramangala', 'indiranagar', 'hsr', 'whitefield', 'marathahalli', 'btm', 'bellandur', 'electronic city', 'bengaluru', 'bangalore', 'hebbal', 'yelahanka', 'jp nagar', 'jayanagar']
  },
  mumbai: {
    coords: { lat: 19.0760, lng: 72.8777 },
    base1bhk: 25000, base2bhk: 45000, base3bhk: 75000,
    localities: ['Bandra', 'Andheri', 'Powai', 'Thane', 'Navi Mumbai', 'Malad', 'Goregaon', 'Borivali', 'Dadar', 'Kurla', 'Vikhroli', 'Mulund'],
    keywords: ['bandra', 'andheri', 'powai', 'thane', 'navi mumbai', 'malad', 'mumbai', 'bombay', 'dadar', 'kurla', 'vikhroli', 'mulund']
  },
  delhi: {
    coords: { lat: 28.6139, lng: 77.2090 },
    base1bhk: 12000, base2bhk: 20000, base3bhk: 35000,
    localities: ['Lajpat Nagar', 'Saket', 'Dwarka', 'Rohini', 'Greater Kailash', 'Vasant Kunj', 'Janakpuri', 'Pitampura', 'Paharganj', 'Karol Bagh'],
    keywords: ['lajpat', 'saket', 'dwarka', 'rohini', 'delhi', 'new delhi', 'vasant', 'janakpuri', 'pitampura', 'karol bagh']
  },
  gurgaon: {
    coords: { lat: 28.4595, lng: 77.0266 },
    base1bhk: 15000, base2bhk: 28000, base3bhk: 50000,
    localities: ['DLF Phase 1', 'Sohna Road', 'Golf Course Road', 'Sector 56', 'Cyber City', 'MG Road', 'Palam Vihar', 'Sector 49'],
    keywords: ['gurgaon', 'gurugram', 'dlf', 'sohna', 'golf course', 'palam vihar']
  },
  noida: {
    coords: { lat: 28.5355, lng: 77.3910 },
    base1bhk: 10000, base2bhk: 18000, base3bhk: 30000,
    localities: ['Sector 18', 'Sector 62', 'Sector 137', 'Greater Noida', 'Sector 50', 'Sector 44', 'Sector 76'],
    keywords: ['noida', 'greater noida', 'sector 18', 'sector 62']
  },
  hyderabad: {
    coords: { lat: 17.3850, lng: 78.4867 },
    base1bhk: 12000, base2bhk: 20000, base3bhk: 32000,
    localities: ['Madhapur', 'Gachibowli', 'Kondapur', 'Hitech City', 'Begumpet', 'Banjara Hills', 'Jubilee Hills', 'Kukatpally', 'Miyapur'],
    keywords: ['madhapur', 'gachibowli', 'kondapur', 'hitech', 'hyderabad', 'hyd', 'jubilee', 'kukatpally', 'miyapur']
  },
  pune: {
    coords: { lat: 18.5204, lng: 73.8567 },
    base1bhk: 12000, base2bhk: 20000, base3bhk: 32000,
    localities: ['Kothrud', 'Baner', 'Hinjewadi', 'Viman Nagar', 'Wakad', 'Hadapsar', 'Aundh', 'Kharadi', 'Magarpatta'],
    keywords: ['kothrud', 'baner', 'hinjewadi', 'viman', 'wakad', 'pune', 'aundh', 'kharadi', 'magarpatta']
  },
  chennai: {
    coords: { lat: 13.0827, lng: 80.2707 },
    base1bhk: 10000, base2bhk: 18000, base3bhk: 28000,
    localities: ['Adyar', 'Anna Nagar', 'T. Nagar', 'Velachery', 'OMR', 'Porur', 'Perambur', 'Sholinganallur', 'Tambaram'],
    keywords: ['adyar', 'anna nagar', 'tnagar', 't nagar', 'velachery', 'omr', 'chennai', 'madras', 'porur', 'sholinganallur']
  },
  kolkata: {
    coords: { lat: 22.5726, lng: 88.3639 },
    base1bhk: 8000, base2bhk: 14000, base3bhk: 22000,
    localities: ['Salt Lake', 'New Town', 'Park Street', 'Ballygunge', 'Howrah', 'Jadavpur', 'Lake Town', 'Behala'],
    keywords: ['kolkata', 'calcutta', 'salt lake', 'new town', 'park street', 'ballygunge', 'jadavpur']
  },
  ahmedabad: {
    coords: { lat: 23.0225, lng: 72.5714 },
    base1bhk: 8000, base2bhk: 14000, base3bhk: 22000,
    localities: ['SG Highway', 'Prahlad Nagar', 'Bopal', 'Navrangpura', 'Satellite', 'Vastrapur', 'Maninagar'],
    keywords: ['ahmedabad', 'amdavad', 'sg highway', 'prahlad nagar', 'bopal', 'navrangpura']
  },
  jaipur: {
    coords: { lat: 26.9124, lng: 75.7873 },
    base1bhk: 7000, base2bhk: 12000, base3bhk: 20000,
    localities: ['Malviya Nagar', 'Vaishali Nagar', 'Mansarovar', 'Jagatpura', 'Civil Lines', 'C-Scheme'],
    keywords: ['jaipur', 'malviya nagar', 'vaishali nagar', 'mansarovar', 'jagatpura']
  },
  chandigarh: {
    coords: { lat: 30.7333, lng: 76.7794 },
    base1bhk: 9000, base2bhk: 15000, base3bhk: 25000,
    localities: ['Sector 17', 'Sector 22', 'Sector 34', 'Mohali', 'Panchkula', 'Sector 44'],
    keywords: ['chandigarh', 'mohali', 'panchkula', 'sector 17', 'sector 22', 'sector 34']
  },
  kochi: {
    coords: { lat: 9.9312, lng: 76.2673 },
    base1bhk: 8000, base2bhk: 14000, base3bhk: 22000,
    localities: ['Marine Drive', 'Aluva', 'Edapally', 'Kakkanad', 'Palarivattom', 'Vyttila'],
    keywords: ['kochi', 'cochin', 'ernakulam', 'aluva', 'edapally', 'kakkanad']
  },
  indore: {
    coords: { lat: 22.7196, lng: 75.8577 },
    base1bhk: 7000, base2bhk: 12000, base3bhk: 20000,
    localities: ['Vijay Nagar', 'Palasia', 'AB Road', 'Bhawarkuan', 'Rau', 'Rajendra Nagar'],
    keywords: ['indore', 'vijay nagar', 'palasia', 'bhawarkuan']
  },
  lucknow: {
    coords: { lat: 26.8467, lng: 80.9462 },
    base1bhk: 7000, base2bhk: 12000, base3bhk: 20000,
    localities: ['Hazratganj', 'Gomti Nagar', 'Aliganj', 'Indira Nagar', 'Mahanagar', 'Alambagh'],
    keywords: ['lucknow', 'hazratganj', 'gomti nagar', 'aliganj', 'indira nagar']
  },
  rohtak: {
    coords: { lat: 28.9010, lng: 76.5802 },
    base1bhk: 6000, base2bhk: 10000, base3bhk: 16000,
    localities: ['Sector 1', 'Sector 2', 'Sector 3', 'Model Town', 'Civil Lines', 'Surya Nagar', 'Shastri Nagar'],
    keywords: ['rohtak', 'haryana']
  },
  patna: {
    coords: { lat: 25.5941, lng: 85.1376 },
    base1bhk: 6000, base2bhk: 10000, base3bhk: 16000,
    localities: ['Boring Road', 'Bailey Road', 'Kankarbagh', 'Raja Bazar', 'Patliputra Colony'],
    keywords: ['patna', 'bihar', 'boring road', 'bailey road', 'kankarbagh']
  },
  bhopal: {
    coords: { lat: 23.2599, lng: 77.4126 },
    base1bhk: 7000, base2bhk: 12000, base3bhk: 20000,
    localities: ['Arera Colony', 'MP Nagar', 'Kolar Road', 'Hoshangabad Road', 'Shahpura'],
    keywords: ['bhopal', 'arera', 'mp nagar', 'kolar']
  },
  nagpur: {
    coords: { lat: 21.1458, lng: 79.0882 },
    base1bhk: 7000, base2bhk: 12000, base3bhk: 20000,
    localities: ['Dharampeth', 'Ramdaspeth', 'Sitabuldi', 'Manish Nagar', 'Wardha Road'],
    keywords: ['nagpur', 'dharampeth', 'ramdaspeth', 'wardha']
  },
  surat: {
    coords: { lat: 21.1702, lng: 72.8311 },
    base1bhk: 8000, base2bhk: 14000, base3bhk: 22000,
    localities: ['Vesu', 'Adajan', 'Katargam', 'Udhna', 'Piplod', 'Ghod Dod Road'],
    keywords: ['surat', 'vesu', 'adajan', 'katargam', 'udhna']
  },
  vizag: {
    coords: { lat: 17.6868, lng: 83.2185 },
    base1bhk: 8000, base2bhk: 13000, base3bhk: 22000,
    localities: ['MVP Colony', 'Gajuwaka', 'Dwaraka Nagar', 'Madhurawada', 'Rushikonda'],
    keywords: ['vizag', 'visakhapatnam', 'mvp colony', 'madhurawada', 'gajuwaka']
  },
  mysore: {
    coords: { lat: 12.2958, lng: 76.6394 },
    base1bhk: 8000, base2bhk: 13000, base3bhk: 22000,
    localities: ['Vijayanagar', 'Hebbal', 'Kuvempunagar', 'Jayalakshmipuram', 'Gokulam'],
    keywords: ['mysore', 'mysuru', 'vijayanagar', 'gokulam', 'hebbal']
  },
  // Generic fallback for any unknown Indian city
  _generic: {
    coords: { lat: 20.5937, lng: 78.9629 }, // Geographic center of India
    base1bhk: 8000, base2bhk: 13000, base3bhk: 22000,
    localities: ['Main Market', 'Civil Lines', 'Model Town', 'New Colony', 'Sector 1', 'Sector 2', 'Old City'],
    keywords: []
  },
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
 * @param {string} location - Human readable location string
 * @param {number} budget - Max budget in INR
 * @param {string} type - flat|house|pg|studio|all
 * @param {string} bhk - 1|2|3|all
 * @param {{ lat: number, lng: number }|null} centerOverride - Real geocoded coordinates (Nominatim/Google)
 * @param {number|null} serpPriceSignal - Real-world average price from SerpAPI (optional calibration)
 */
export function generateMockListings(location, budget, type = 'all', bhk = 'all', centerOverride = null, serpPriceSignal = null) {
  const profile = detectCityProfile(location);

  // Use real geocoded coordinates if provided, otherwise fall back to city profile coords
  const center = (centerOverride && !isNaN(centerOverride.lat) && !isNaN(centerOverride.lng))
    ? { lat: centerOverride.lat, lng: centerOverride.lng }
    : profile.coords;

  const count = 18 + Math.floor(Math.random() * 8); // 18-26 listings

  const properties = [];
  const usedNames = new Set();

  for (let i = 0; i < count; i++) {
    const bhkNum = bhk !== 'all' ? parseInt(bhk) : pickBHK();
    const propType = type !== 'all' ? type : pickType();

    const name = pickUnique(PROPERTY_NAMES, usedNames);
    const locality = profile.localities[Math.floor(Math.random() * profile.localities.length)];

    // Price: use SerpAPI signal if available and reasonable, else city profile
    let basePrice;
    if (serpPriceSignal && serpPriceSignal > 3000 && serpPriceSignal < 200000) {
      // Calibrate around the real-world signal price
      const bhkMultipliers = { 1: 0.65, 2: 1.0, 3: 1.45 };
      basePrice = serpPriceSignal * (bhkMultipliers[bhkNum] || 1.0);
    } else {
      basePrice = getBHKBase(profile, bhkNum, propType);
    }
    const variance = 0.75 + Math.random() * 0.5; // ±25% variance
    const price = Math.round((basePrice * variance) / 500) * 500;


    // Position: scatter around the REAL center within ~2.5km radius
    // ~0.045 degrees ≈ 5km at Indian latitudes, so 0.022 per axis ≈ 2.5km radius
    const latOff = (Math.random() - 0.5) * 0.045;
    const lngOff = (Math.random() - 0.5) * 0.045;
    const lat = center.lat + latOff;
    const lng = center.lng + lngOff;
    const distance = (Math.sqrt(latOff ** 2 + lngOff ** 2) * 111).toFixed(1);

    // Area
    const area = generateArea(bhkNum);

    // Amenities
    const amenityCount = 2 + Math.floor(Math.random() * 5);
    const amenities = [...ALL_AMENITIES].sort(() => Math.random() - 0.5).slice(0, amenityCount);

    const searchQuery = encodeURIComponent(`${name} ${locality} ${location.split(',')[0].trim()}`);
    properties.push({
      id: `mock_${i}_${Date.now()}`,
      name: `${name}`,
      // Use real searched location name, not the profile city (avoids "Bangalore" showing for Rohtak)
      address: `${locality}, ${location.split(',')[0].trim()}`,
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
      url: `https://www.99acres.com/search/property/rent/${encodeURIComponent(location.split(',')[0].trim().toLowerCase().replace(/\s+/g, '-'))}?budget_max=${price + 2000}&bedrooms=${bhkNum}`,
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

  // Deterministic trend: rising if avg price > budget, stable otherwise
  const marketTrend = avgPrice > budget * 0.85 ? 'rising' : 'stable';
  const trendPercent = (((avgPrice - budget * 0.7) / (budget * 0.7)) * 10).toFixed(1);

  return {
    avgPrice,
    medianPrice,
    minPrice,
    maxPrice,
    inBudgetCount,
    totalCount: properties.length,
    budgetPercentile,
    recommendation,
    marketTrend,
    trendPercent: Math.max(0, parseFloat(trendPercent)).toFixed(1),
  };
}

// ── Internal Helpers ─────────────────────────────────────────────────────────

function detectCityProfile(location) {
  const lower = location.toLowerCase();
  for (const [city, profile] of Object.entries(CITY_PROFILES)) {
    if (city === '_generic') continue; // skip generic in keyword matching
    if (profile.keywords.some(k => lower.includes(k))) {
      return { ...profile, city };
    }
  }
  // Unknown city — use generic Indian city profile (moderate prices)
  // The centerOverride from Nominatim will provide the correct location
  const cityName = location.split(',')[0].trim();
  return { ...CITY_PROFILES._generic, city: cityName };
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
  if (!arr || arr.length === 0) return 'Rental Property';
  const available = arr.filter(x => !used.has(x));
  // Reset used set when all options exhausted
  if (available.length === 0) {
    used.clear();
    arr.forEach(x => { if (!used.has(x)) available.push(x); });
  }
  const pick = available[Math.floor(Math.random() * available.length)];
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
