## 2024-12-19 - Critical Overlay Accessibility Gap
**Learning:** Custom overlay components (Reader Mode, Glossary) lacked fundamental keyboard navigation (Escape to close, Arrows to page) and ARIA labels for icon-only buttons, creating a complete barrier for keyboard users.
**Action:** All future overlay/modal components must include a `useEffect` for `keydown` handling (Escape) and explicit `aria-label` attributes on icon-only controls during initial implementation.
## 2024-12-19 - Progress Bar & Dynamic Array Accessibility Pattern
**Learning:** Custom UI components utilizing div elements for progress indicators lacked semantic meaning, and dynamic arrays rendering icon-only buttons dropped crucial context for screen reader users.
**Action:** Always enforce standard ARIA roles (`role="progressbar"`) with bounding attributes (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`) on div-based metrics, and explicitly define `aria-label` when mapping through textless interactive arrays.
