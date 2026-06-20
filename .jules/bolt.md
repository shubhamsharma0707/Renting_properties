## 2024-06-25 - Leaflet Map Marker Performance
**Learning:** Destroying and recreating Leaflet map markers during high-frequency events (like a budget slider `input` event) is extremely expensive because of the DOM operations involved. It blocks the main thread and causes UI jank.
**Action:** Always debounce heavy map rendering or data refreshing functions when they are triggered by high-frequency UI elements, while keeping purely visual updates (like text labels and gradients) synchronous for perceived responsiveness.
