## 2024-09-14 - Map Rendering Debounce
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking. Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs, while keeping lightweight UI updates (like gradient changes) synchronous.
**Action:** Always apply debouncing to heavy DOM manipulations or re-renders triggered by high-frequency events, using the provided `debounce` utility, while keeping light UI state changes synchronous for perceived responsiveness.
