## 2024-12-19 - Critical Overlay Accessibility Gap
**Learning:** Custom overlay components (Reader Mode, Glossary) lacked fundamental keyboard navigation (Escape to close, Arrows to page) and ARIA labels for icon-only buttons, creating a complete barrier for keyboard users.
**Action:** All future overlay/modal components must include a `useEffect` for `keydown` handling (Escape) and explicit `aria-label` attributes on icon-only controls during initial implementation.

## 2026-02-24 - Blocking Feedback UX
**Learning:** Using `alert()` for form submission is a poor UX pattern that blocks the thread and feels dated. Users expect immediate visual feedback (loading spinner, disabled state) within the UI itself.
**Action:** Replace all blocking `alert()` calls with non-blocking feedback mechanisms (toast, inline loading states) and disable interactive elements during async operations.
