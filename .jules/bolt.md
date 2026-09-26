## 2024-09-26 - Debounce Expensive Map Re-renders
**Learning:** Destroying and recreating Leaflet map markers on every tick of a slider input event blocks the main thread and causes severe jank.
**Action:** Always debounce heavy map rendering or DOM manipulation functions tied to high-frequency events like slider inputs, while keeping lightweight UI updates (like label text and gradients) synchronous for immediate visual feedback.
