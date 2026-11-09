
## 2026-11-09 - Debouncing Leaflet Marker Render
**Learning:** Destroying and recreating Leaflet map markers continuously during high-frequency slider inputs causes severe main thread blocking and jank in this architecture, even if standard DOM manipulations are fast enough.
**Action:** Always wrap heavy rendering functions (like Leaflet marker loops) in `debounce()` when tied to fast DOM events like `input`, while leaving lightweight style updates (like slider gradients) synchronous to maintain a snappy feel.
