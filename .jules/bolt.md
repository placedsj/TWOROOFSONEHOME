## 2024-03-30 - Identify setTime causing full re-renders
**Learning:** In React components like `DigitalBinder`, setting local state (e.g. `setTime`) from a `setInterval` within a `useEffect` causes the entire `DigitalBinder` component tree to re-render every second.
**Action:** Extract the clock or heartbeat UI component that relies on the interval into its own smaller component, so only that sub-component re-renders instead of the entire large parent component.
