## 2024-05-18 - Accessible Icon-Only Modal Controls
**Learning:** In dynamically rendered React components like `DigitalBinder.tsx`, icon-only buttons (like `X` to close modals or domains selectors) lack explicit text and can be missed by screen readers or keyboard users. Furthermore, relying on Tailwind's `focus-visible:ring-2` provides necessary visual feedback during keyboard navigation.
**Action:** Always add `aria-label`, an optional `title` for tooltip fallback, and explicit `focus-visible:ring-2` tailwind classes to all standalone icon buttons across the application's modals and menus.
