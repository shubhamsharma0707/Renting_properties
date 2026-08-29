## 2024-05-01 - [Debouncing Leaflet Marker Rendering]
**Learning:** Destroying and recreating Leaflet map markers synchronously on high-frequency events (like range slider `input`) blocks the main thread and causes UI lag.
**Action:** Always debounce heavy map rendering or DOM reconciliation tasks tied to frequent events.
