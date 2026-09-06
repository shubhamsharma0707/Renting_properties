## 2024-05-24 - Main Thread Blocking on Map Rendering
**Learning:** Destroying and recreating complex Leaflet map markers in this project is computationally expensive and causes noticeable main thread blocking and UI lag when triggered by fast, high-frequency DOM events (like a range slider's `input` event).
**Action:** Always decouple heavy DOM or map rendering operations from high-frequency event handlers using a `debounce` utility, while keeping lightweight visual feedback (like updating a text label or a CSS gradient) synchronous to maintain a responsive feel.
