## 2025-03-15 - [Component Extraction]
**Learning:** Having fast-updating state (like a clock using `setInterval(..., 1000)`) inside a massive wrapper component like `DigitalBinder` causes the entire 1000+ line component, including dozens of heavy interactive modules and 3D effects, to re-render every second.
**Action:** Always extract fast-updating state into small, isolated child components. Let React's tree reconciliation do its job by only updating the small subtree that needs to change.
