
## 2026-09-15 - Debouncing Map Re-renders on High-Frequency Events
**Learning:** Destroying and recreating Leaflet map markers on every `input` event of a slider causes significant main thread blocking due to the heavy DOM manipulation involved in map rendering.
**Action:** Heavy rendering functions like marker updates should be debounced when tied to high-frequency events like sliders, while lightweight UI updates (like gradient changes) should remain synchronous.
