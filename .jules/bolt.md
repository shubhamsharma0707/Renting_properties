## 2024-05-24 - Debouncing Leaflet Marker Rendering
**Learning:** Recreating/destroying Leaflet map markers on high-frequency UI events like slider inputs is very computationally expensive and can block the main thread, causing severe UI lag.
**Action:** Always wrap map rendering logic (like marker updates) in a `debounce` when triggered by high-frequency events (`input`, `scroll`, etc) to maintain fluid UI responsiveness.
