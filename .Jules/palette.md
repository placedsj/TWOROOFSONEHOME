## 2024-12-19 - Critical Overlay Accessibility Gap
**Learning:** Custom overlay components (Reader Mode, Glossary) lacked fundamental keyboard navigation (Escape to close, Arrows to page) and ARIA labels for icon-only buttons, creating a complete barrier for keyboard users.
**Action:** All future overlay/modal components must include a `useEffect` for `keydown` handling (Escape) and explicit `aria-label` attributes on icon-only controls during initial implementation.

## 2024-05-22 - Semantic Interaction for Cards
**Learning:** Using `div` with `onClick` for primary navigation cards (Agreement Modules) creates a "ghost" interaction for keyboard users—they can see it but not reach it.
**Action:** Always wrap interactive cards in `<button>` elements (with `w-full text-left` to preserve layout) instead of adding `onClick` to `div`s. This gives free keyboard access and focus handling.
