## 2024-12-19 - Critical Overlay Accessibility Gap
**Learning:** Custom overlay components (Reader Mode, Glossary) lacked fundamental keyboard navigation (Escape to close, Arrows to page) and ARIA labels for icon-only buttons, creating a complete barrier for keyboard users.
**Action:** All future overlay/modal components must include a `useEffect` for `keydown` handling (Escape) and explicit `aria-label` attributes on icon-only controls during initial implementation.

## 2024-12-20 - Standardized Async Form Interactions
**Learning:** Native HTML5 constraint validation (`required`) combined with a visual loading state (`Loader2` + `disabled`) provides the most robust and accessible pattern for form submissions, ensuring native tooltips are used before blocking submission with custom async handlers.
**Action:** Always include explicit `<label>` links (`htmlFor`/`id`), native validation attributes (`required`), and a disabled loading state on the submit button when implementing forms.
