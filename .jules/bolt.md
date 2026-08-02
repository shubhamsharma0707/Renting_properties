## 2024-05-24 - Debouncing Map Marker Rendering
**Learning:** Destroying and recreating Leaflet map markers on high-frequency events (like a range slider `input` event) is computationally expensive and causes main thread blocking.
**Action:** Debounce heavy map rendering functions tied to high-frequency UI events to keep the main thread unblocked.