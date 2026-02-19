## 2024-12-19 - Critical Overlay Accessibility Gap
**Learning:** Custom overlay components (Reader Mode, Glossary) lacked fundamental keyboard navigation (Escape to close, Arrows to page) and ARIA labels for icon-only buttons, creating a complete barrier for keyboard users.
**Action:** All future overlay/modal components must include a `useEffect` for `keydown` handling (Escape) and explicit `aria-label` attributes on icon-only controls during initial implementation.

## 2026-02-19 - Accessible Pagination Controls
**Learning:** Visual "dot" navigation (pagination indicators) is frequently implemented as non-interactive `div` elements, excluding keyboard and screen reader users.
**Action:** Always implement pagination indicators as `<button>` elements with `aria-label` (e.g., "Go to slide 1") and `aria-current` to indicate the active state.
