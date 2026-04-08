## 2024-06-18 - Prevent Unnecessary Re-renders from Clock
**Learning:** Found an anti-pattern in `pages/DigitalBinder.tsx` where an inline clock updates every second, causing the entire large complex component tree to re-render. This destroys performance, especially for a page heavily populated with animations and states.
**Action:** Extract fast-updating states (like clocks) into their own small wrapper components to isolate re-renders.
