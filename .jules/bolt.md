## 2024-06-23 - Map marker creation performance bottleneck
**Learning:** Destroying and recreating Leaflet map markers on high-frequency events (like dragging a range slider) causes severe main thread blocking in this frontend architecture.
**Action:** Always wrap heavy map rendering functions (like `refreshCards`) in a `debounce` utility when they are tied to high-frequency slider inputs. Provide instant UI feedback for the lightweight components (labels, slider gradients) and defer the expensive map updates.
