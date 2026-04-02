## 2024-04-02 - Added Missing ARIA Labels to Icon-Only Buttons
**Learning:** Found multiple icon-only buttons (like close modals) that lacked `aria-label`, making them completely invisible to screen readers, especially in complex modals where context is lost.
**Action:** Always verify icon-only buttons have an `aria-label`, `title`, and explicit `focus-visible:ring-2 focus-visible:outline-none` classes.
