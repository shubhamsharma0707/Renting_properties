## 2024-07-16 - Leaflet Markers Block Main Thread
**Learning:** Destroying and recreating Leaflet map markers on high-frequency events like slider inputs is computationally expensive and causes noticeable UI jank due to main thread blocking.
**Action:** Always wrap heavy DOM or map rendering functions tied to high-frequency inputs (e.g., `refreshCards` or map marker updates) in a `debounce` function to preserve frame rate and responsiveness.
