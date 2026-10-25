## 2024-05-18 - Leaflet Map Markers Re-render Janks
**Learning:** Calling Leaflet marker destruction and recreation synchronously on every slider `input` event causes main thread blocking because it's a computationally expensive DOM operation.
**Action:** Debounce the heavy rendering function (like `refreshCards`) while keeping lightweight UI updates (like slider gradients) synchronous.
