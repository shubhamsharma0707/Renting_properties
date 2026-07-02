## 2024-05-18 - [Debouncing Leaflet map markers rendering]
**Learning:** Recreating Leaflet markers synchronously on high-frequency UI events like a slider input locks the main thread and requires debouncing.
**Action:** When a high frequency UI event like `input` updates the map markers state, debounce the actual heavy-lifting map operations to avoid jank, while updating other UI parts synchronously.
