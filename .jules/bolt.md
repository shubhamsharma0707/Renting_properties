## 2024-05-18 - Debouncing Map Renders
**Learning:** Destroying and recreating Leaflet map markers is computationally expensive and can cause main thread blocking on high-frequency events like slider inputs.
**Action:** Use debounce for map rendering operations tied to sliders.
