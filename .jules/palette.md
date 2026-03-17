## 2024-03-17 - Improve Keyboard Accessibility and Screen Reader Support for Icon-Only Buttons

**Learning:** Interactive components that only contain icons without text nodes (e.g., Lucide React icons) require explicit `aria-label` and `title` attributes to be accessible to screen readers and mouse users. Furthermore, relying on default focus rings is often insufficient or visually inconsistent; explicit `focus-visible` styles ensure proper keyboard navigation feedback without breaking mouse click interactions.

**Action:** Whenever adding custom icon-only buttons (like `X` to close modals, or specialized domain toggles), mandate the inclusion of `aria-label`, a native `title` tooltip, and `focus-visible:ring-2` Tailwind classes.
