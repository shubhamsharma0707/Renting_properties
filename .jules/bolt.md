## 2024-09-24 - Debounce heavy map rendering tied to high-frequency events
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking. Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs, while keeping lightweight UI updates (like gradient changes) synchronous.
**Action:** Always wrap heavy DOM updates and map renderings in a debounce function when triggered by high-frequency UI events like `input` or `scroll`.
