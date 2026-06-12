## 2024-06-12 - [DOM Thrashing via Slider Event]
**Learning:** In the MapView component, synchronous `input` events on the range slider were recreating 30 DOM property cards and Leaflet markers on every frame. This causes severe main thread blocking and layout thrashing, specifically during fast drag operations.
**Action:** Always decouple heavy DOM operations/Leaflet marker regeneration from high-frequency events (like `input` or `scroll`) using `debounce` or `requestAnimationFrame`, while keeping pure UI state (like labels) synchronous for immediate user feedback.
