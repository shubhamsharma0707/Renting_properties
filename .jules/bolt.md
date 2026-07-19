## 2024-05-24 - Leaflet Marker Rendering Bottleneck
**Learning:** Destroying and recreating Leaflet map markers on high-frequency events (like a budget range slider `input` event) causes significant main thread blocking and jank in this project's architecture.
**Action:** Always wrap heavy map rendering or DOM reconciliation functions (like `refreshCards`) with a `debounce` utility when they are tied to high-frequency inputs. Leave the lightweight UI updates (like slider label/gradient) synchronous for a snappy feel.
