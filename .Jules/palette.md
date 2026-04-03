## 2024-10-24 - Icon-only interactive elements lacking context
**Learning:** Icon-only buttons and interactive div elements in the DigitalBinder component were lacking accessible names and semantic structure, making them inaccessible to screen readers.
**Action:** Always add `aria-label` and `title` to icon-only buttons and ensure interactive elements like pagination dots use semantic `<button>` tags instead of `<div>`s.
