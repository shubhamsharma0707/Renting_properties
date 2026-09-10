## 2024-05-24 - Map Marker Bottleneck
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and causes main thread blocking when tied to high-frequency events like slider inputs.
**Action:** Debounce heavy map rendering functions when attached to continuous events, while keeping lightweight UI updates (like gradient changes) synchronous to maintain apparent responsiveness.
