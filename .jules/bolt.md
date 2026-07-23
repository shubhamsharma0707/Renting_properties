## 2024-05-18 - Debounce heavy map updates on slider input
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking. Heavy map rendering functions (`refreshCards`, `renderMarkers`) should be debounced when tied to high-frequency events like slider inputs (`input` events on `<input type="range">`).
**Action:** Always wrap high-frequency state updates that trigger heavy DOM or Map manipulations in a debounce function (`debounce` from `src/utils/api.js`).
