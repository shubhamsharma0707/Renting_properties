
## 2024-11-04 - Debouncing Map Marker Rendering
**Learning:** Destroying and recreating Leaflet map markers on every tick of a slider `input` event causes significant main thread blocking and jank.
**Action:** Always wrap expensive DOM or Map rendering functions in a `debounce` when tied to high-frequency events like slider dragging, but leave lightweight UI updates (like label changes or gradient updates) synchronous to keep the UI snappy.
