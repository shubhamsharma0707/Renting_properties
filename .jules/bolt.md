## 2026-10-07 - Debounce expensive Leaflet rendering
**Learning:** Destroying and recreating Leaflet map markers on every slider input tick causes main thread blocking.
**Action:** Always decouple fast UI updates (like slider gradients or label text) from expensive map rendering operations. Use a debouncer to batch the heavy DOM and map updates while keeping the UI responsive.
