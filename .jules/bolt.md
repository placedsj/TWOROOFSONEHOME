## 2024-04-04 - React interval root re-render bottleneck
**Learning:** The entire root component `DigitalBinder` (which is 1500 lines long) has an interval updating the current time every second. This causes a re-render of the massive root component and all its children every single second.
**Action:** Isolate frequent, isolated UI updates (like a clock) into their own memoized components to prevent the main application tree from unnecessary re-renders.
