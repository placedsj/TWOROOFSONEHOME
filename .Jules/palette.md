## 2024-12-19 - Critical Overlay Accessibility Gap
**Learning:** Custom overlay components (Reader Mode, Glossary) lacked fundamental keyboard navigation (Escape to close, Arrows to page) and ARIA labels for icon-only buttons, creating a complete barrier for keyboard users.
**Action:** All future overlay/modal components must include a `useEffect` for `keydown` handling (Escape) and explicit `aria-label` attributes on icon-only controls during initial implementation.

## 2025-02-28 - Custom Indicator to Button Transition
**Learning:** Found custom indicator dots for the Reader Control Dock implemented as `div`s with an `onClick` handler, missing focusability, semantic identity, and screen reader labels. This causes screen reader users and keyboard navigators to lose access to pagination entirely.
**Action:** Transformed `div` elements mapping over progress arrays into `<button>` elements, pairing them with `aria-label`, `aria-selected` and `focus-visible:ring-2` to restore semantic keyboard and screen reader accessibility natively.
