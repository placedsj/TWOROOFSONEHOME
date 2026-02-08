## 2024-05-22 - [Keyboard Accessibility for Interactive Cards]
**Learning:** Found critical navigation elements (timeline, module cards) implemented as `div` with `onClick`, making them inaccessible to keyboard users.
**Action:** Always check interactive cards/lists for semantic `<button>` or `<a>` tags and add focus styles (e.g. `focus-visible:ring`).

## 2024-05-23 - [Accessible Modals]
**Learning:** Visual modals missing `role="dialog"` and `aria-modal="true"` are invisible to screen readers as "modals". Also, missing Escape key support traps keyboard users.
**Action:** Always implement `role="dialog"`, `aria-modal`, and `useEffect` for Escape key handling in custom modals.

## 2026-02-08 - [Keyboard Navigation for Reader Mode]
**Learning:** Full-screen overlays must implement Escape key support to prevent keyboard traps. Users expect paginated content (like agreements) to support arrow key navigation.
**Action:** Always add keyboard listeners for navigation (Arrow keys) and closure (Escape) for custom full-screen views, and provide visual hints.
