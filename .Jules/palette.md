## 2024-05-22 - [Keyboard Accessibility for Interactive Cards]
**Learning:** Found critical navigation elements (timeline, module cards) implemented as `div` with `onClick`, making them inaccessible to keyboard users.
**Action:** Always check interactive cards/lists for semantic `<button>` or `<a>` tags and add focus styles (e.g. `focus-visible:ring`).
