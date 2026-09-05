
## 2024-09-05 - Debounce map marker regeneration
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking when executed frequently.
**Action:** When a high-frequency event like a slider input triggers UI changes, ensure lightweight UI updates (like the gradient change on the slider) remain synchronous for responsiveness, while the heavy map rendering and DOM recreation functions (like `refreshCards`) are debounced to prevent stuttering.
