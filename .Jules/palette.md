## 2025-04-08 - Responsive Text Buttons Can Become Icon-Only
**Learning:** In the Digital Binder component, the "Open Directive" button has text that is hidden on mobile devices (`hidden sm:inline`), effectively turning it into an icon-only button for mobile users without providing an accessible name to screen readers on those devices.
**Action:** Always add explicit `aria-label` and `title` attributes to buttons containing icons and responsive text elements, even if the text is visible on desktop, to ensure consistent accessibility across all viewports.
