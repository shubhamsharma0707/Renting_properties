
## 2024-05-20 - [Performance] Debounce budget slider map updates
**Learning:** Leaflet marker destruction and recreation inside an `input` event handler (which fires continuously on drag) caused severe main thread blocking in `MapView.js`.
**Action:** Use a debouncer on the heavy rendering operations (like `this.refreshCards()`) while keeping lightweight UI updates (like slider gradients and labels) synchronous for immediate user feedback.
