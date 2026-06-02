# 🏠 RentRadar — Smart Rental Property Finder

> Find your perfect home nearby with **real-time rental data**, **interactive 3D maps**, and **AI-powered budget analysis** — covering every city in India.

![RentRadar](https://img.shields.io/badge/RentRadar-v1.0.0-00d4ff?style=for-the-badge&logo=home&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-8b5cf6?style=for-the-badge)

---

## 📸 Overview

**RentRadar** is a full-stack rental property discovery platform built for the Indian market. It combines a stunning 3D animated landing page, a live interactive map (Leaflet + OpenStreetMap), real-time web search for rental prices (SerpAPI), and an AI insights panel powered by Google Gemini — all in a sleek dark-mode UI.

### Key Highlights

- 🌍 **Any location in India** — powered by OpenStreetMap Nominatim geocoding (no API key required)
- 🗺️ **Interactive dark map** — price-tagged markers in green / amber / red based on your budget
- 🤖 **Gemini AI insights** — personalized market analysis and budget recommendations
- 📊 **Real-time price signals** — SerpAPI fetches live rental data from NoBroker, 99acres, OLX
- 🏙️ **3D animated city** — Three.js hero scene on the landing page
- 💰 **Smart budget filtering** — slider-based filtering with live market percentile display

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version |
|------|---------|
| Node.js | ≥ 18.x |
| npm | ≥ 9.x |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/shubhamsharma0707/Renting_properties.git
cd Renting_properties

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env   # then fill in your API keys
```

### Environment Variables

Create a `.env` file in the project root:

```env
# ── Google Maps API (optional — enables Places data + better geocoding)
# Get yours at: https://console.cloud.google.com
# Enable: Maps JavaScript API, Places API, Geocoding API
GOOGLE_MAPS_API_KEY=your_google_maps_key_here

# ── SerpAPI (real-time rental price signals from web search)
# Free tier: 100 searches/month at https://serpapi.com
SERPAPI_KEY=your_serpapi_key_here

# ── Gemini AI (market insights & budget advice)
# Get yours at: https://aistudio.google.com/app/apikey
GEMINI_API_KEY=your_gemini_api_key_here
VITE_GEMINI_KEY=your_gemini_api_key_here

# ── Server
PORT=3001
NODE_ENV=development
```

> **Note:** The app runs perfectly without any API keys using intelligently generated mock data based on real Indian rental market statistics.

### Run Locally

```bash
# Start both frontend (Vite) and backend (Express) concurrently
npm run dev
```

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:3001 |
| Health Check | http://localhost:3001/health |

---

## 🏗️ Project Structure

```
rent-radar/
├── index.html                  # App entry point
├── vite.config.js              # Vite config + API proxy
├── package.json
│
├── src/                        # Frontend (Vite + Vanilla JS)
│   ├── main.js                 # Client-side router
│   ├── pages/
│   │   ├── Landing.js          # 3D hero + search form (Three.js)
│   │   └── MapView.js          # Map + sidebar layout (Leaflet)
│   ├── components/
│   │   ├── PropertyCard.js     # Individual property card UI
│   │   └── PriceInsights.js    # Market insights panel + Gemini AI
│   ├── utils/
│   │   └── api.js              # Frontend API client + helpers
│   └── styles/
│       └── index.css           # Full design system (dark glassmorphism)
│
└── server/                     # Backend (Express.js)
    ├── index.js                # Server entry point + middleware
    ├── routes/
    │   └── search.js           # /api/search, /api/geocode, /api/ai-advice
    ├── services/
    │   ├── geocoder.js         # Nominatim + Google Maps geocoding
    │   ├── places.js           # Google Places API integration
    │   ├── websearch.js        # SerpAPI rental price search
    │   └── gemini.js           # Google Gemini AI advice
    └── scrapers/
        └── rentData.js         # Mock data generator + market insights
```

---

## 🔌 API Reference

### `GET /api/search`
Search for rental properties in any location.

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `location` | string | `Koramangala, Bangalore` | Any Indian city, area, or locality |
| `budget` | number | `25000` | Maximum monthly rent in INR |
| `type` | string | `all` | `flat`, `house`, `pg`, `studio`, or `all` |
| `bhk` | string | `all` | `1`, `2`, `3`, or `all` |

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
  "budget": 50000,
  "center": { "lat": 19.0549, "lng": 72.8402 },
  "properties": [ ... ],
  "insights": { "avgPrice": 42000, "inBudgetCount": 12, ... },
  "total": 24
}
```

### `GET /api/geocode`
Geocode any address to lat/lng coordinates.

```
GET /api/geocode?address=Sector 17, Chandigarh
```

### `GET /api/ai-advice`
Get Gemini AI-powered rental market advice.

```
GET /api/ai-advice?location=Pune&budget=20000
```

### `GET /health`
Backend health check.

---

## 🌐 Data Sources

| Source | What it provides | Key required? |
|--------|-----------------|---------------|
| **OpenStreetMap Nominatim** | Geocoding for any location worldwide | ❌ Free |
| **SerpAPI** | Real-time rental prices from NoBroker, 99acres, OLX | ✅ Free tier |
| **Google Places API** | Nearby venue data + geocoding | ✅ Paid |
| **Google Gemini AI** | Market insights + budget recommendations | ✅ Free tier |
| **Mock data generator** | Statistically accurate fallback (always active) | ❌ Built-in |

> Without any API keys, RentRadar uses an intelligent mock data engine calibrated to real Indian rental market averages for 20+ cities — from Tier-1 metros to Tier-2 cities like Rohtak, Patna, Nagpur, and Vizag.

---

## 🏙️ Supported Cities

RentRadar has built-in rental price profiles for:

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

Plus **any other location in India** via real-time Nominatim geocoding — even obscure localities and neighbourhoods.

---

## 🎨 Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **Vanilla JS (ES Modules)** | Core application logic |
| **Vite 5** | Dev server + bundler |
| **Three.js** | 3D animated city on landing page |
| **Leaflet.js** | Interactive map (CartoDB dark tiles) |
| **Vanilla CSS** | Full design system (glassmorphism dark theme) |
| **Space Grotesk + Inter** | Typography (Google Fonts) |

### Backend
| Technology | Purpose |
|------------|---------|
| **Express.js** | REST API server |
| **Axios** | HTTP client for external APIs |
| **dotenv** | Environment variable management |
| **express-rate-limit** | API rate limiting (100 req/15 min) |
| **cors** | Cross-origin support for Vite dev proxy |

---

## 📦 Available Scripts

```bash
npm run dev      # Start both frontend + backend (recommended)
npm run client   # Frontend only (Vite on port 5173)
npm run server   # Backend only (Express on port 3001)
npm run build    # Production build
npm run preview  # Preview production build
```

---

## 🔒 Security

- API keys are stored in `.env` (excluded from version control via `.gitignore`)
- Rate limiting: 100 requests per 15 minutes per IP on all `/api` routes
- CORS restricted to localhost:5173 and localhost:4173 in development

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute.

---

## 👨‍💻 Author

**Shubham Sharma**
- GitHub: [@shubhamsharma0707](https://github.com/shubhamsharma0707)
- Repository: [Renting_properties](https://github.com/shubhamsharma0707/Renting_properties)

---

<div align="center">
  <p>Built with ❤️ for renters across India</p>
  <p><strong>RentRadar</strong> — Find your perfect home, smarter.</p>
</div>
