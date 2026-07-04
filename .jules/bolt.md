## 2024-07-04 - [Debounce Leaflet Marker Re-renders]
**Learning:** Destroying and recreating Leaflet map markers continuously during high-frequency events (like slider `input`) is computationally expensive and causes main thread blocking in this frontend architecture.
**Action:** Always wrap heavy map rendering functions (like destroying/creating markers) with `debounce` when tied to high-frequency UI events to prevent blocking the main thread and janky rendering.
