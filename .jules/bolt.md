## 2024-10-01 - Debouncing Leaflet Map Markers Re-renders
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking when tied to high-frequency events like slider inputs.
**Action:** Always debounce heavy map rendering functions tied to frequent inputs (like sliders), while keeping lightweight UI updates (like gradient changes) synchronous.
