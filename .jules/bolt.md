## 2024-04-06 - Extracting Fast-Updating State to Micro-Components
**Learning:** Found a severe performance anti-pattern in `DigitalBinder.tsx` where a `setInterval` updating a `time` state every second was placed at the top level of a massive page component. This causes the entire page (which is heavily populated with complex UI) to re-render every second.
**Action:** Extract fast-updating state (like a live clock) into a dedicated, isolated micro-component (`LiveClock`). This confines re-renders solely to that tiny component and protects the main tree from unnecessary layout thrashing.
