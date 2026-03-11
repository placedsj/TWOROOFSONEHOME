## 2024-12-19 - Critical Overlay Accessibility Gap
**Learning:** Custom overlay components (Reader Mode, Glossary) lacked fundamental keyboard navigation (Escape to close, Arrows to page) and ARIA labels for icon-only buttons, creating a complete barrier for keyboard users.
**Action:** All future overlay/modal components must include a `useEffect` for `keydown` handling (Escape) and explicit `aria-label` attributes on icon-only controls during initial implementation.
## 2025-02-12 - Dynamic Controls Accessibility
**Learning:** Dynamic icon-only controls mapped from arrays must include explicit aria-label attributes using their text-equivalent data (e.g., aria-label={"Select ${d.title}"}) to ensure accessibility context is preserved for screen readers.
**Action:** Always add explicit aria-labels and appropriate ARIA states (like aria-pressed, aria-current) when rendering dynamic visual controls without text labels.
