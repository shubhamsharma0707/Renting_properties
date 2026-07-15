## 2024-07-15 - [Map Marker Re-rendering Lag]
**Learning:** Destroying and recreating Leaflet map markers continuously while dragging a slider range input is computationally expensive and causes noticeable main thread blocking and map lag in this architecture.
**Action:** Always debounce heavy DOM/map updates (like `refreshCards()`) tied to high-frequency events (`input` on range sliders) using the built-in `debounce` utility from `src/utils/api.js`.
