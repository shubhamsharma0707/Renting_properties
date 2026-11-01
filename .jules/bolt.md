## 2026-11-01 - Debounce Heavy Leaflet DOM Updates
**Learning:** Destroying and recreating Leaflet map markers on every tick of a slider input is computationally expensive and causes main thread blocking.
**Action:** Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs, while keeping lightweight UI updates synchronous.
