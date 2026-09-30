## 2024-05-14 - Map Marker Rerendering Bottleneck
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and causes main thread blocking. High-frequency UI events like slider inputs must debounce heavy map rendering functions while allowing lightweight UI updates (like DOM text changes) to happen synchronously.
**Action:** Always identify heavy DOM manipulations tied to `input` or `scroll` events and wrap them in a `debounce` to ensure smooth UI responsiveness.
