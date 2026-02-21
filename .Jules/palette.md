## 2024-12-19 - Critical Overlay Accessibility Gap
**Learning:** Custom overlay components (Reader Mode, Glossary) lacked fundamental keyboard navigation (Escape to close, Arrows to page) and ARIA labels for icon-only buttons, creating a complete barrier for keyboard users.
**Action:** All future overlay/modal components must include a `useEffect` for `keydown` handling (Escape) and explicit `aria-label` attributes on icon-only controls during initial implementation.

## 2025-05-21 - Form Accessibility & Feedback Pattern
**Learning:** Basic login forms without loading states or explicit labels create uncertainty for users and barriers for screen readers. Placeholders are not replacements for labels.
**Action:** Always include explicit `<label>` elements (even if visually hidden) and implement a `disabled` + loading state for submit buttons during async operations.
