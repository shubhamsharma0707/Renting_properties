## 2024-05-24 - [Debounce Slider Inputs for Map Rendering]
**Learning:** Destroying and recreating Leaflet map markers on every single `input` event from a range slider is extremely computationally expensive and causes main thread blocking, which makes the UI feel janky during drag interactions.
**Action:** Always debounce heavy DOM/map rendering functions tied to high-frequency events like slider inputs, while keeping lightweight UI updates (like labels or gradients) synchronous to maintain a responsive feel.
