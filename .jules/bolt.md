## 2024-03-23 - Extract Fast-Updating State to Prevent Massive Re-renders

**Learning:** In dynamically rendered React components (like `DigitalBinder.tsx` with over 800 lines), top-level state variables updated by `setInterval` (like a live clock updated every second) cause the entire component and its children to unnecessarily re-render on every tick.
**Action:** Extract fast-updating, localized state (e.g., clocks, timers) into isolated small components (e.g., `<LiveClock />`) to prevent heavy full-page reconciliation overhead.
