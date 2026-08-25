## 2024-08-25 - Debounce map marker rendering
**Learning:** Destroying and recreating Leaflet map markers on every input event (like dragging a budget slider) is computationally expensive and causes main thread blocking.
**Action:** Always debounce heavy DOM/map rendering functions when they are triggered by high-frequency events like slider inputs.
