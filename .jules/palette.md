## 2024-04-08 - Accessibility of Icon-only Buttons
**Learning:** Icon-only buttons (like the `X` icon used for closing modals, or icons used for tabs) are inaccessible to screen readers and can be confusing without tooltips. The `DigitalBinder.tsx` component utilized several of these for crucial interaction points like closing the directive reader and glossary.
**Action:** Always verify that interactive elements containing only icons or visual SVGs have an `aria-label` for screen reader support and a `title` attribute to provide a native tooltip for sighted users.
