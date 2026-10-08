
## 2024-10-08 - Leaflet Map Markers Blocking Main Thread
**Learning:** Destroying and recreating Leaflet map markers is computationally expensive. When tied directly to high-frequency events like a range slider's `input` event, it can cause severe main thread blocking and jank in the UI.
**Action:** Always debounce heavy map rendering functions when tied to continuous input events, while keeping lightweight UI updates (like labels and gradients) synchronous to maintain a responsive feel.
