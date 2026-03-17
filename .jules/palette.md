## 2024-03-17 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Icon-only buttons (like those with an `X` icon to close modals, drawers, or glossaries) frequently lack `aria-label` attributes in this app, rendering them invisible to screen readers.
**Action:** Always add descriptive `aria-label` attributes to icon-only buttons (e.g., `aria-label="Close"` or `aria-label="Close Audit Log"`).
