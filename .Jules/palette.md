## 2024-12-19 - Critical Overlay Accessibility Gap
**Learning:** Custom overlay components (Reader Mode, Glossary) lacked fundamental keyboard navigation (Escape to close, Arrows to page) and ARIA labels for icon-only buttons, creating a complete barrier for keyboard users.
**Action:** All future overlay/modal components must include a `useEffect` for `keydown` handling (Escape) and explicit `aria-label` attributes on icon-only controls during initial implementation.

## 2025-02-18 - Form Accessibility Pattern
**Learning:** Forms relying solely on `placeholder` attributes without explicit labels fail WCAG success criteria and provide poor usability for screen reader users.
**Action:** Always pair inputs with explicit `<label>` elements linked via `htmlFor`/`id`, and use `placeholder` only as supplementary guidance.
