## 2026-11-05 - Debounce Heavy Leaflet Renders on Slider Input
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and causes main thread blocking when tied synchronously to range slider inputs.
**Action:** Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs, while keeping lightweight UI updates (like gradient and text changes) synchronous for a responsive feel.
