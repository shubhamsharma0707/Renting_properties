## 2024-06-26 - [Leaflet Marker Regeneration Bottleneck]
**Learning:** Destroying and recreating Leaflet map markers on high-frequency UI events (like `input` on a range slider) causes noticeable main-thread blocking and jank in the RentRadar application.
**Action:** Always decouple immediate UI feedback (like updating a slider's visual gradient and text label) from expensive map operations by debouncing the map update function. Use `element.evaluate` with explicit `dispatchEvent(new Event('input'))` when automating range slider tests in Playwright.
