## 2026-06-28 - Debouncing Leaflet Marker Updates During Slider Interactions
**Learning:** In this vanilla JS setup, destroying and recreating Leaflet map markers on every single range slider `input` event is extremely computationally expensive and severely blocks the main thread, leading to a laggy UI.
**Action:** Always wrap heavy DOM or Map-related UI update functions in a `debounce` (e.g. from `src/utils/api.js`) when attaching them to high-frequency events like slider inputs, while updating cheap elements (like text labels) synchronously for immediate feedback.
