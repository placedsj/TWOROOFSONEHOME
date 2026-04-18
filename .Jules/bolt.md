## 2024-05-18 - Isolated Rapidly Updating State (Clock)
**Learning:** The entire `DigitalBinder` tree was unnecessarily re-rendering every second because a rapid `setInterval` timer (updating a `time` state) was placed at the very top level of the page component.
**Action:** Always isolate rapidly updating visual state (like clocks or progress bars) into dedicated, localized child components to prevent full-tree re-renders in massive layout structures.
