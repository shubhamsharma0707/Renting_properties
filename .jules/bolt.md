
## 2026-10-31 - Debouncing Leaflet Marker Re-renders
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and causes main thread blocking during rapid slider inputs. Attempting to run Playwright verification on a slow/hanging dev server might cause standard `page.fill` on range inputs to time out.
**Action:** Heavy DOM/Map rendering functions triggered by high-frequency events (like range sliders) must be debounced, while lightweight UI updates (like labels and gradients) should remain synchronous. Use `page.locator().evaluate()` and explicit event dispatching to interact with range sliders in Playwright tests reliably.
