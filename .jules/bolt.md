## 2024-10-24 - Component Isolation Strategy
**Learning:** In dynamically rendered React components (e.g., `DigitalBinder.tsx`), fast-updating state (like a live clock updated via `setInterval` every second) placed at the top level causes massive full-page re-renders.
**Action:** Extract fast-updating state into its own isolated, small React component to prevent massive full-page re-renders, rather than leaving it at the top level of a large parent component.
