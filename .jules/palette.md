## 2025-04-12 - Missing ARIA labels on icon-only buttons
**Learning:** Found several icon-only buttons (like modal close buttons and domain selection tabs) across the application lacking `aria-label` or `title` attributes. This pattern severely degrades the experience for screen reader users and those relying on tooltips for context.
**Action:** Always ensure that `<button>` elements that only contain an icon have clear, descriptive `aria-label` and `title` attributes applied by default to provide context and accessible tooltips.
