## 2024-03-19 - Missing ARIA Labels on Icon-Only UI Controls
**Learning:** Complex custom UI modules (like the reader and modal dialogs in this app) frequently use icon-only buttons (e.g., Lucide icons without text) which are completely opaque to screen readers if not explicitly labeled.
**Action:** Always verify that buttons containing only icons (`<X />`, `<Headphones />`) have descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.
