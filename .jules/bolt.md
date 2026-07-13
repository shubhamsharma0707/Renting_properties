## 2024-07-13 - [Debounce Map Marker Rendering]
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking, particularly when tied to high-frequency events like slider `input`.
**Action:** Always wrap heavy map rendering functions like `refreshCards` in a `debounce` utility (e.g., using `debounce` from `src/utils/api.js`) when they are triggered by high-frequency events.
