## 2024-05-24 - Icon-Only Button Accessibility
**Learning:** This application makes heavy use of icon-only buttons for modals (Reader, Glossary), completely lacking `aria-label` attributes for screen readers. Given the critical "legal" and emotional nature of the content here, accessibility isn't just a nicety—it's essential for ensuring all users can navigate the agreements.
**Action:** Add `aria-label` to all icon-only buttons (like the `X` close buttons) across the site to ensure they are accessible.
