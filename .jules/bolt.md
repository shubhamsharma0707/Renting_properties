## 2026-08-09 - Debounce Leaflet Marker Recreation
**Learning:** Recreating Leaflet markers and DOM elements on high-frequency events like slider `input` causes severe main-thread blocking.
**Action:** Always debounce heavy rendering tasks tied to rapid user inputs.
