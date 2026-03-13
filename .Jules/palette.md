## 2024-12-19 - Critical Overlay Accessibility Gap
**Learning:** Custom overlay components (Reader Mode, Glossary) lacked fundamental keyboard navigation (Escape to close, Arrows to page) and ARIA labels for icon-only buttons, creating a complete barrier for keyboard users.
**Action:** All future overlay/modal components must include a `useEffect` for `keydown` handling (Escape) and explicit `aria-label` attributes on icon-only controls during initial implementation.

## 2025-03-13 - Dynamic Icon-Only Controls Need Explicit ARIA
**Learning:** Dynamic icon-only controls mapped from arrays (like the Maternal Directives domains) become completely inaccessible to screen reader users if they lack an explicit aria-label since they have no visible text.
**Action:** When rendering arrays of icon-only elements, always map a text-equivalent property (like `title` or `name`) into an explicit `aria-label` attribute on the interactive container.
