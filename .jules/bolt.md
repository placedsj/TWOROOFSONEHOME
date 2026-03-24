## 2025-03-24 - Isolated Live Clock to Prevent Massive Re-renders
**Learning:** In dynamically rendered React components like `DigitalBinder.tsx`, maintaining a fast-updating state (like a live clock updated via `setInterval` every second) at the top-level forces the entire parent component to re-render.
**Action:** Always extract fast-updating state into its own isolated, small React component rather than leaving it at the top level of a large parent component.
