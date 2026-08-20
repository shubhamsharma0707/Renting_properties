## 2026-08-20 - Debouncing Heavy Map Renders
**Learning:** Destroying and recreating Leaflet map markers on high-frequency events (like slider inputs) causes severe main thread blocking and laggy UI.
**Action:** Always debounce computationally expensive DOM operations or framework renders that are tied to continuous input events.
