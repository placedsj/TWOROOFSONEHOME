## 2025-02-12 - Icon-Only Controls Accessibility
**Learning:** Highly stylized interface elements like the MaternalDirectiveControl tabs and modal close buttons often use icon-only designs that are completely inaccessible to screen readers without aria-label, and custom pagination indicators lack both semantic button roles and keyboard focus states.
**Action:** Always verify that every interactive icon and custom control in this codebase's design system receives proper ARIA labels, semantic HTML tags, and focus-visible styles to ensure equitable access and keyboard navigation.
