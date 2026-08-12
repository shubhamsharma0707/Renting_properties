## 2024-08-12 - Debouncing Map Re-rendering
**Learning:** In the RentRadar project, updating Leaflet map markers during high-frequency slider inputs blocks the main thread because rendering custom HTML markers and destroying old ones is computationally expensive.
**Action:** Always wrap heavy map rendering functions like `this.refreshCards()` (which calls `renderMarkers()`) with a `debounce` when tied to high-frequency events like slider `input`, while keeping UI elements like labels updating instantaneously.
