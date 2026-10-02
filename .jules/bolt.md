## 2024-06-03 - Debouncing Heavy Map Rendering
**Learning:** Destroying and recreating Leaflet map markers synchronously on high-frequency events (like range slider `input`) blocks the main thread, causing severe lag in the UI.
**Action:** When a slider value determines complex DOM updates or map rendering, debounce the heavy function (e.g., `150ms`) while keeping lightweight UI updates (like the slider gradient or label text) synchronous to maintain a responsive feel.
