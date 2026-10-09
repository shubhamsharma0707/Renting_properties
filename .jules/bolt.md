## 2024-10-09 - Debounce Heavy Leaflet Map Marker Rendering
**Learning:** Destroying and recreating Leaflet map markers on every slider input in this project is computationally expensive and causes main thread blocking. Heavy map rendering functions need debouncing, while lightweight UI updates (like gradient changes) can remain synchronous.
**Action:** Always decouple fast UI feedback (like slider thumb movement and text labels) from heavy DOM/Map updates using debounce when tying functions to high-frequency events like `input`.
