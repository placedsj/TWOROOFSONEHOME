## 2024-05-01 - Missing ARIA Labels on Close Buttons
**Learning:** Icon-only close buttons (like 'X' inside dialogs, modals, and drawers) lack semantic meaning for screen readers. In the `DigitalBinder` component, multiple modals were observed using the `lucide-react` `<X />` icon without an accessible label.
**Action:** Always add `aria-label` to icon-only buttons. e.g., `<button aria-label="Close [SectionName]">...</button>`.
