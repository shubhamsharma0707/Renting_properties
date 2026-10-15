## 2024-10-15 - Debouncing Map Marker Rendering
**Learning:** Destroying and recreating Leaflet map markers synchronously tied to high-frequency events (like slider inputs) causes severe main thread blocking and lag.
**Action:** Always debounce heavy map manipulation and DOM regeneration during continuous input events, while keeping lightweight UI updates (like slider gradients) synchronous.
