## 2024-10-12 - Debounce Leaflet Map Marker Recreation
**Learning:** Destroying and recreating Leaflet map markers on every tick of the slider causes main thread blocking.
**Action:** Debounce heavy updates while keeping UI (like slider gradients and labels) synchronous.
