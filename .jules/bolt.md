## 2024-11-03 - [Debouncing heavy map updates]
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking. Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs, while keeping lightweight UI updates (like gradient changes) synchronous.
**Action:** Use the debounce utility from src/utils/api.js to debounce expensive map operations while updating local UI synchronously.
