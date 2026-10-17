
## 2024-03-24 - Debouncing DOM-heavy operations on slider input
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking during continuous events like `input` on a range slider.
**Action:** Debounce heavy map rendering functions when tied to high-frequency events, while keeping lightweight UI updates (like gradient changes and text labels) synchronous.
