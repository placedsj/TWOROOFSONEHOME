## 2024-12-19 - Critical Overlay Accessibility Gap
**Learning:** Custom overlay components (Reader Mode, Glossary) lacked fundamental keyboard navigation (Escape to close, Arrows to page) and ARIA labels for icon-only buttons, creating a complete barrier for keyboard users.
**Action:** All future overlay/modal components must include a `useEffect` for `keydown` handling (Escape) and explicit `aria-label` attributes on icon-only controls during initial implementation.

## 2025-03-08 - Dynamic Icon-Only Controls Accessibility
**Learning:** Icon-only controls mapped dynamically from arrays (like domain selectors) often lack inherent text context, making them opaque to screen readers if not explicitly labeled with the dynamic data they represent.
**Action:** Ensure that any dynamic map rendering icon-only controls includes explicit `aria-label` attributes that leverage the text-equivalent properties from the mapped object (e.g., `aria-label={\`Select \${d.title}\`}`).
