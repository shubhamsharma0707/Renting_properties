## 2024-08-28 - Debouncing expensive map marker re-renders
**Learning:** Destroying and recreating Leaflet map markers on every single slider `input` event is computationally expensive and causes main thread blocking.
**Action:** Always debounce heavy DOM/map rendering functions when they are tied to high-frequency events like slider inputs, while keeping the UI text/gradient updates synchronous for perceived responsiveness.
