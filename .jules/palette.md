## 2024-05-15 - Interactive Exhibit Screen Reader Accessibility
**Learning:** Found that the "interactive exhibit" verification simulator in DigitalBinder doesn't communicate its dynamic status effectively to screen readers because of an overreliance on visual indicators and complex multi-div components for status logs.
**Action:** Always ensure that dynamically updated regions (like terminal logs or progress states) use aria-live regions so that assistive technologies announce the updates correctly.
