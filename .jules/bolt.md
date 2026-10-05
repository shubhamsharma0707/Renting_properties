## 2024-10-24 - Debouncing Map Marker Rendering
**Learning:** Destroying and recreating Leaflet map markers on every single input event from a slider is computationally expensive and causes severe main thread blocking, making the UI feel unresponsive.
**Action:** When updating a map based on a slider or high-frequency event, debounce the heavy map rendering (marker recreation/dom updates) while keeping lightweight UI updates (slider label/gradient) synchronous for immediate feedback.
