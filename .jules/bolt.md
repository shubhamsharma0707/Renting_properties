## $(date +%Y-%m-%d) - Optimize Map Marker Rendering on High-Frequency Events
**Learning:** Destroying and recreating Leaflet map markers on high-frequency events like slider inputs is computationally expensive and causes main thread blocking.
**Action:** Always debounce heavy map rendering functions tied to rapid UI interactions while keeping lightweight updates (like gradients) synchronous.
