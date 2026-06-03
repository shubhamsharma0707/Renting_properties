<div align="center">

# RentRadar

### Smart Rental Property Finder for India

*Real-time rental data · Interactive 3D maps · AI-powered budget analysis*

[![Version](https://img.shields.io/badge/version-1.0.0-6dbf82?style=flat-square)](https://github.com/shubhamsharma0707/Renting_properties)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Three.js](https://img.shields.io/badge/Three.js-0.163-black?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org)
[![License](https://img.shields.io/badge/License-MIT-c9975a?style=flat-square)](LICENSE)

</div>

---

## What is RentRadar?

**RentRadar** is a full-stack rental property discovery platform built for the Indian market. Search apartments, flats, PGs, and houses across any city in India — complete with live rental prices, a dark interactive map with price markers, and AI-driven market analysis from Google Gemini.

The UI is designed around a nature-inspired earthy theme — deep forest greens, warm earth browns, and glassmorphism panels — with a fully animated Three.js 3D cityscape on the landing page.

---

## Features

| Feature | Details |
|---------|---------|
| **Any location in India** | Powered by OpenStreetMap Nominatim — no API key required |
| **Interactive dark map** | Leaflet + price-tagged markers coloured by budget status |
| **Gemini AI insights** | Personalised market analysis and budget recommendations |
| **Real-time price signals** | SerpAPI fetches live data from NoBroker, 99acres, OLX |
| **3D animated landing** | Three.js city scene with forest green + amber palette |
| **Smart budget filtering** | Slider-based filtering with live market percentile bar |
| **No API key needed** | Intelligent mock data engine covers 20+ Indian cities |

---

## Tech Stack

### Frontend
| Technology | Role |
|-----------|------|
| Vanilla JS (ES Modules) | Application logic & routing |
| Vite 5 | Dev server & bundler |
| Three.js | 3D animated hero city scene |
| Leaflet.js | Interactive map (CartoDB dark tiles) |
| Vanilla CSS | Custom design system (nature-themed glassmorphism) |
| DM Serif Display + Plus Jakarta Sans | Typography via Google Fonts |

### Backend
| Technology | Role |
|-----------|------|
| Express.js | REST API server |
| Axios | HTTP client for external APIs |
| Google Generative AI SDK | Gemini AI integration |
| SerpAPI | Real-time web search for rental prices |
| dotenv | Environment variable management |
| express-rate-limit | 100 req / 15 min per IP |

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/shubhamsharma0707/Renting_properties.git
cd Renting_properties

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Open .env and fill in your API keys (all optional — see below)
```

### Environment Variables

Create a `.env` file in the project root:

```env
# Google Maps API — enables Places data + precise geocoding
# https://console.cloud.google.com → Enable: Places API, Geocoding API
GOOGLE_MAPS_API_KEY=your_google_maps_key_here

# SerpAPI — real-time rental listings from NoBroker, 99acres, OLX
# Free tier: 100 searches/month → https://serpapi.com
SERPAPI_KEY=your_serpapi_key_here

# Google Gemini AI — market insights & budget advice
# Free tier → https://aistudio.google.com/app/apikey
GEMINI_API_KEY=your_gemini_api_key_here

# Server config
PORT=3001
NODE_ENV=development
```

> **No API keys?** No problem. RentRadar runs fully on its built-in mock data engine, which generates statistically calibrated rental data based on real Indian market averages for 20+ cities.

### Run Locally

```bash
npm run dev
```

| Service | URL |
|---------|-----|
| Frontend (Vite) | http://localhost:5173 |
| Backend API | http://localhost:3001 |
| Health Check | http://localhost:3001/health |

---

## Project Structure

```
Renting_properties/
│
├── index.html                   # App entry point
├── vite.config.js               # Vite config + API proxy to :3001
├── package.json
│
├── src/                         # Frontend (Vite + Vanilla JS)
│   ├── main.js                  # Client-side SPA router
│   ├── pages/
│   │   ├── Landing.js           # 3D hero scene + search form (Three.js)
│   │   └── MapView.js           # Map + sidebar layout (Leaflet)
│   ├── components/
│   │   ├── PropertyCard.js      # Property card component (SVG icons)
│   │   └── PriceInsights.js     # Market insights + Gemini AI panel
│   ├── utils/
│   │   └── api.js               # Frontend API client + format helpers
│   └── styles/
│       └── index.css            # Design system — nature-themed glassmorphism
│
└── server/                      # Backend (Express.js)
    ├── index.js                 # Server entry point + CORS + rate limiting
    ├── routes/
    │   └── search.js            # /api/search · /api/geocode · /api/ai-advice
    └── services/
        ├── geocoder.js          # Nominatim + Google Maps geocoding
        ├── places.js            # Google Places API integration
        ├── websearch.js         # SerpAPI rental search
        ├── gemini.js            # Google Gemini AI advice
        └── rentData.js          # Mock data engine + market insights
```

---

## API Reference

### `GET /api/search`
Search rental properties in any Indian location.

**Query parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `location` | string | `Koramangala, Bangalore` | City, area, or locality |
| `budget` | number | `25000` | Max monthly rent in ₹ |
| `type` | string | `all` | `flat` · `house` · `pg` · `studio` · `all` |
| `bhk` | string | `all` | `1` · `2` · `3` · `all` |

**Example:**
```
GET /api/search?location=Bandra,Mumbai&budget=50000&type=flat&bhk=2
```

**Response:**
```json
{
  "success": true,
  "dataSource": "serp",
  "location": "Bandra, Mumbai",
  "center": { "lat": 19.0549, "lng": 72.8402 },
  "properties": [
    {
      "id": "...",
      "name": "2 BHK Flat in Bandra West",
      "type": "flat",
      "bhk": 2,
      "price": 45000,
      "address": "Bandra West, Mumbai",
      "lat": 19.0549,
      "lng": 72.8402,
      "amenities": ["WiFi", "Parking", "Security"]
    }
  ],
  "insights": {
    "avgPrice": 42000,
    "minPrice": 28000,
    "maxPrice": 75000,
    "inBudgetCount": 12,
    "totalCount": 24,
    "budgetPercentile": 68,
    "marketTrend": "stable"
  }
}
```

### `GET /api/geocode`
Geocode any address to lat/lng.
```
GET /api/geocode?address=Sector 17, Chandigarh
```

### `GET /api/ai-advice`
Get Gemini AI rental market advice for a location and budget.
```
GET /api/ai-advice?location=Pune&budget=20000
```

### `GET /health`
Backend health check — returns API key status.

---

## Supported Cities

Built-in rental price profiles for all major Indian markets:

| Tier 1 | Tier 2 | Tier 3 |
|--------|--------|--------|
| Bangalore | Jaipur | Rohtak |
| Mumbai | Chandigarh | Patna |
| Delhi / NCR | Kochi | Nagpur |
| Hyderabad | Indore | Bhopal |
| Pune | Lucknow | Surat |
| Chennai | Noida | Vizag |
| Kolkata | Gurgaon | Mysore |
| Ahmedabad | — | — |

**Any other location** in India also works via real-time Nominatim geocoding — including obscure localities and neighbourhoods.

---

## Available Scripts

```bash
npm run dev      # Start frontend + backend concurrently (recommended)
npm run client   # Frontend only — Vite on port 5173
npm run server   # Backend only — Express on port 3001
npm run build    # Production build
npm run preview  # Preview production build locally
```

---

## Data Sources

| Source | What It Provides | API Key |
|--------|-----------------|---------|
| OpenStreetMap Nominatim | Geocoding for any location | Free — no key |
| SerpAPI | Live rental prices from NoBroker, 99acres, OLX | Free tier |
| Google Places API | Nearby property data + geocoding | Paid |
| Google Gemini AI | Market insights + budget recommendations | Free tier |
| Built-in mock engine | Statistically accurate fallback — always active | None |

---

## Security

- All API keys are stored in `.env` — excluded from version control via `.gitignore`
- Rate limiting: **100 requests per 15 minutes** per IP on all `/api/` routes
- CORS restricted to `localhost:5173` and `localhost:4173` in development

---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

<div align="center">

**RentRadar** — Find your perfect home, smarter.

Built by [Shubham Sharma](https://github.com/shubhamsharma0707)

</div>
