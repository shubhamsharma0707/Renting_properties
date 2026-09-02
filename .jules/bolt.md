## $(date +%Y-%m-%d) - Debouncing Leaflet Marker Updates
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking during continuous events like slider input.
**Action:** Always debounce heavy map rendering functions tied to high-frequency events, while keeping lightweight UI updates synchronous.
