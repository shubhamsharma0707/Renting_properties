## 2024-09-14 - Debouncing Map Marker Rendering
**Learning:** Destroying and recreating Leaflet map markers is computationally expensive and can cause main thread blocking during high-frequency events like slider inputs.
**Action:** Always debounce heavy map rendering functions when tied to frequent UI events, while keeping lightweight UI updates synchronous.
