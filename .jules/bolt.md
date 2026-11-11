
## 2024-11-11 - [Debounce High-Frequency Map Rendering Events]
**Learning:** Destroying and recreating Leaflet map markers on high-frequency events (like range slider `input`) blocks the main thread and causes UI jank. Standard event handlers execute synchronously on every tick.
**Action:** Use a `debounce` utility (like the one in `src/utils/api.js`) to defer computationally heavy map updates (like `refreshCards()`) while keeping lightweight visual updates (like slider gradients and labels) synchronous for immediate feedback.
