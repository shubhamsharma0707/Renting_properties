
## 2024-05-30 - Debouncing Heavy Map Renders
**Learning:** Destroying and recreating Leaflet map markers is computationally expensive. Tying them directly to high-frequency events like slider inputs can block the main thread.
**Action:** Apply debounce to heavy map rendering functions tied to sliders, but keep lightweight DOM updates (like gradient/labels) synchronous to maintain UI responsiveness.
