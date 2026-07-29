## 2024-05-24 - Debouncing Map Marker Rendering
**Learning:** Destroying and recreating Leaflet map markers and DOM cards on every `input` event from a slider (high-frequency) causes significant main thread blocking and makes the UI feel sluggish.
**Action:** Always debounce heavy DOM/map rendering operations that are tied to high-frequency events like slider inputs, while keeping lightweight visual updates (like slider gradients and labels) synchronous for immediate feedback.
