## 2024-03-24 - Accessible Icon-Only Matrix Buttons
**Learning:** Icon-only toggle buttons in matrix components (like domain selectors) require `aria-pressed` for screen readers to understand the active state, along with `aria-label`, `title`, and explicit `focus-visible` states for keyboard accessibility, ensuring both context and state are clear without visual cues.
**Action:** Always verify icon-only interactive components provide screen reader context, state indication (`aria-pressed` or `aria-expanded`), and clear focus indicators.
