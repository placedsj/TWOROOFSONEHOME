## 2025-02-28 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found multiple icon-only buttons (like "Close" with an X icon) lacking text descriptions. This pattern is common in modal/reader overlays where space is tight, but it severely impacts screen reader users who cannot understand the button's purpose without an `aria-label`.
**Action:** Always add descriptive `aria-label` and `title` attributes to icon-only buttons (e.g., `aria-label="Close Reader"` or `aria-label="Close Lexicon"`).
