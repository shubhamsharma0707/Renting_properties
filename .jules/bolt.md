## 2024-08-26 - Debounce High-Frequency Slider Inputs
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking when tied directly to high-frequency slider `input` events.
**Action:** Always wrap heavy rendering functions, like map marker updates, with the provided `debounce` utility when triggered by continuous slider inputs.
