## 2024-03-18 - Component Isolation for Performance
**Learning:** In heavy React components (e.g., `DigitalBinder.tsx`), placing fast-updating state like a `setInterval` clock at the top level causes massive unnecessary re-renders of the entire component tree every second.
**Action:** Extract fast-updating, isolated UI elements (like a live clock) into their own child components. This restricts the rapid re-renders to only the small component that actually changes, significantly improving performance.
