## 2024-04-08 - Extracted Live Clock Component
**Learning:** Having a `setInterval` that updates state every second at the root of a large component like `DigitalBinder` causes the entire component (and all its children, unless memoized) to re-render every second.
**Action:** Extract frequently updating state (like a live clock) into its own small component so only that small component re-renders.
