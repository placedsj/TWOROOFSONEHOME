## 2024-12-19 - Critical Overlay Accessibility Gap
**Learning:** Custom overlay components (Reader Mode, Glossary) lacked fundamental keyboard navigation (Escape to close, Arrows to page) and ARIA labels for icon-only buttons, creating a complete barrier for keyboard users.
**Action:** All future overlay/modal components must include a `useEffect` for `keydown` handling (Escape) and explicit `aria-label` attributes on icon-only controls during initial implementation.

## 2024-05-18 - Icon-Only Controls and Custom Visualizations Lack Explicit Context
**Learning:** Found custom data visualizations (like `InteractiveExhibit`'s verification progress) and dynamically mapped icon-only buttons (`MaternalDirectiveControl` domains) inherently failed to provide context to assistive technologies because they relied purely on visual cues or generic `div`/`button` wrappers without ARIA labeling.
**Action:** Always map dynamic icon-only controls to descriptive `aria-label` attributes using their text-equivalent data (e.g., `aria-label={"Select ${d.title}"}`), and ensure custom visual states like loading bars explicitly declare `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`.
