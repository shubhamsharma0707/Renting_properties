## 2026-08-01 - [Debounce Map Updates]
**Learning:** Re-rendering map markers on every range slider input event causes main thread blocking.
**Action:** Use debounce utility for slider inputs tied to heavy DOM/Map updates.
