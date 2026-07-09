## 2026-07-09 - Main thread blocking due to synchronous map marker manipulation
**Learning:** High-frequency UI events (like range slider `input`) that synchronously trigger Leaflet map marker destruction and recreation cause severe main thread blocking and frame drops.
**Action:** When a high-frequency event must update heavy DOM or Canvas/WebGL/Leaflet components, debounce the heavy update logic while keeping lightweight UI state updates (labels, CSS gradients) synchronous.
