## 2024-03-28 - Icon-only buttons accessibility
**Learning:** Found multiple icon-only buttons without aria-labels in the DigitalBinder component. This makes it difficult for screen reader users to understand the purpose of the buttons.
**Action:** Always add descriptive `aria-label` attributes to buttons that only contain icons. And add focus rings.
