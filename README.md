<div align="center">

# 🏠 RentRadar

### Smart Rental Property Finder for India

*Real-time rental data · Interactive dark maps · AI-powered budget analysis*

[![Version](https://img.shields.io/badge/version-1.0.0-6dbf82?style=flat-square)](https://github.com/shubhamsharma0707/Renting_properties)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Three.js](https://img.shields.io/badge/Three.js-0.163-black?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900?style=flat-square&logo=leaflet&logoColor=white)](https://leafletjs.com)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com)
[![License](https://img.shields.io/badge/License-MIT-c9975a?style=flat-square)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-brightgreen?style=flat-square&logo=github)](https://shubhamsharma0707.github.io/Renting_properties)

</div>

---

## 📌 Overview

**RentRadar** is a full-stack rental property discovery platform built specifically for the Indian market. It lets you search apartments, flats, PGs, and houses across any city in India — with live rental prices, an interactive dark map with colour-coded price markers, and AI-driven market analysis powered by Google Gemini.

The UI is designed around a **Navy Frost glassmorphism** aesthetic — deep navy, soft frost whites, and animated accent gradients — topped with a fully animated Three.js 3D cityscape on the landing page.

> **Zero API keys required to run.** RentRadar ships with a built-in mock data engine calibrated against real Indian market averages for 20+ cities, so you can explore the full experience without any signup.

---

## ✨ Features

| Feature | Details |
|---------|---------|
| 🗺️ **Any location in India** | Powered by OpenStreetMap Nominatim — no API key required |
| 🌙 **Interactive dark map** | Leaflet.js + CartoDB Dark tiles, price markers colour-coded by budget |
| 🤖 **Gemini AI insights** | Personalised market analysis, budget recommendations & neighbourhood tips |
| 📡 **Real-time price signals** | SerpAPI fetches live listings from NoBroker, 99acres, and OLX |
| 🏙️ **3D animated hero scene** | Three.js cityscape with Navy Frost + amber palette |
| 🎚️ **Smart budget filtering** | Slider-based filtering with live market-percentile bar |
| 📊 **Market insights panel** | Avg/min/max prices, in-budget count, and trend indicators |
| 🔒 **Rate-limited API** | 100 req / 15 min per IP — safe for public deployment |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Role |
|-----------|------|
| Vanilla JS (ES Modules) | SPA routing & application logic |
| Vite 5 | Dev server & production bundler |
| Three.js `v0.163` | 3D animated hero city scene |
| Leaflet.js `v1.9` | Interactive map (CartoDB Dark tiles) |
| Vanilla CSS | Custom design system — Navy Frost glassmorphism |
| DM Serif Display + Plus Jakarta Sans | Google Fonts typography |

### Backend
| Technology | Role |
|-----------|------|
| Express.js `v4` | REST API server |
| Axios | HTTP client for external API calls |
| `@google/generative-ai` | Gemini AI integration |
| SerpAPI | Real-time web search for rental listings |
| `express-rate-limit` | 100 req / 15 min per IP |
| `dotenv` | Environment variable management |
| `cheerio` | HTML parsing for scraped data |

---

## 🚀 Getting Started

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

# 3. Configure environment variables (all optional)
cp .env.example .env
# Edit .env and add your API keys — see below
```

### Environment Variables

Create a `.env` file in the project root. **All keys are optional** — the app falls back to the built-in mock engine automatically.

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

## 📁 Project Structure

```
Renting_properties/
│
├── index.html                   # App entry point (SPA shell)
├── vite.config.js               # Vite config + API proxy → :3001
├── package.json
│
├── src/                         # Frontend (Vite + Vanilla JS)
│   ├── main.js                  # Client-side SPA router
│   ├── pages/
│   │   ├── Landing.js           # 3D hero scene + search form (Three.js)
│   │   └── MapView.js           # Map + sidebar layout (Leaflet)
│   ├── components/
│   │   ├── PropertyCard.js      # Property card with SVG icons
│   │   └── PriceInsights.js     # Market insights + Gemini AI panel
│   ├── utils/
│   │   └── api.js               # Frontend API client + format helpers
│   └── styles/
│       └── index.css            # Design system — Navy Frost glassmorphism
│
├── server/                      # Backend (Express.js)
│   ├── index.js                 # Server entry + CORS + rate limiting
│   ├── routes/
│   │   └── search.js            # /api/search · /api/geocode · /api/ai-advice
│   ├── scrapers/                # Web scraping utilities
│   └── services/
│       ├── geocoder.js          # Nominatim + Google Maps geocoding
│       ├── places.js            # Google Places API integration
│       ├── websearch.js         # SerpAPI rental search
│       └── gemini.js            # Google Gemini AI advice
│
└── .github/
    └── workflows/
        └── deploy.yml           # GitHub Pages auto-deploy CI/CD
```

---

## 📡 API Reference

### `GET /api/search`
Search rental properties for any Indian location.

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `location` | `string` | `Koramangala, Bangalore` | City, area, or locality |
| `budget` | `number` | `25000` | Max monthly rent in ₹ |
| `type` | `string` | `all` | `flat` · `house` · `pg` · `studio` · `all` |
| `bhk` | `string` | `all` | `1` · `2` · `3` · `all` |

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

---

### `GET /api/geocode`
Geocode any address to `lat/lng`.

```
GET /api/geocode?address=Sector 17, Chandigarh
```

---

### `GET /api/ai-advice`
Get Gemini AI-powered rental market advice for a location and budget.

```
GET /api/ai-advice?location=Pune&budget=20000
```

---

### `GET /health`
Backend health check — returns server status and API key availability.

---

## 🏙️ Supported Cities

Built-in calibrated rental price profiles for all major Indian markets:

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

> **Any other locality** in India also works via real-time Nominatim geocoding — including obscure neighbourhoods, societies, and pin codes.

---

## 📜 Available Scripts

```bash
npm run dev      # Start frontend + backend concurrently (recommended)
npm run client   # Frontend only — Vite on port 5173
npm run server   # Backend only — Express on port 3001
npm run build    # Production build (outputs to /dist)
npm run preview  # Preview production build locally
```

---

## 🗄️ Data Sources

| Source | What It Provides | API Key |
|--------|-----------------|---------|
| OpenStreetMap Nominatim | Geocoding for any Indian location | Free — no key needed |
| SerpAPI | Live rental listings from NoBroker, 99acres, OLX | Free tier (100/mo) |
| Google Places API | Nearby property data + geocoding | Paid (optional) |
| Google Gemini AI | Market insights + budget recommendations | Free tier |
| Built-in mock engine | Statistically calibrated fallback — always active | None |

---

## 🔒 Security

- All API keys are stored in `.env` and excluded from version control via `.gitignore`
- Rate limiting: **100 requests per 15 minutes** per IP on all `/api/*` routes
- CORS restricted to `localhost:5173` and `localhost:4173` in development
- No sensitive data is stored or logged

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** your feature branch: `git checkout -b feature/your-feature`
3. **Commit** your changes: `git commit -m 'feat: add your feature'`
4. **Push** to your branch: `git push origin feature/your-feature`
5. **Open** a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## 📄 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

<div align="center">

**RentRadar** — Find your perfect home, smarter. 🏠

Built with ❤️ by [Shubham Sharma](https://github.com/shubhamsharma0707)

⭐ Star this repo if you found it useful!

</div>
