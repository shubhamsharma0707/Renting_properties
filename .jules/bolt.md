## 2024-05-24 - Debouncing Map Marker Rendering
**Learning:** Destroying and recreating Leaflet map markers on every tick of a slider `input` event is computationally expensive and causes main thread blocking in this frontend architecture.
**Action:** Always debounce heavy map rendering or DOM reconciliation functions when they are tied to high-frequency events like slider inputs.
