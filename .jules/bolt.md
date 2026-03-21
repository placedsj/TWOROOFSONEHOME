## 2025-02-28 - Component Isolation for Fast-Updating State
**Learning:** React re-renders the entire component tree when state changes. If a component like `DigitalBinder` has a fast-updating state (like a clock updating every second via `setInterval`), it causes the entire massive component to re-render every second unnecessarily, which is a performance killer.
**Action:** Extract fast-updating state into its own isolated, small component (like `LiveClock`) to limit the re-render scope to just that component, preventing unnecessary re-renders of the large parent component.
