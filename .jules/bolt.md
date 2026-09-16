## 2024-05-24 - Debouncing computationally expensive DOM/Map operations
**Learning:** High-frequency events (like slider `input`) triggering complex operations (like destroying and recreating Leaflet markers and DOM elements) causes main thread blocking and severe UI stuttering.
**Action:** Apply `debounce` to the heavy rendering functions while keeping lightweight UI updates (like label text and CSS gradients) synchronous for immediate feedback.
