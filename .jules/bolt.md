## 2024-03-15 - Extract Time Component
**Learning:** Found an unnecessary root-level interval in `DigitalBinder.tsx` which updates every second (`setTime(new Date())`). This causes the entire `DigitalBinder` component and all of its heavy children to re-render every single second just to update a small clock in the header.
**Action:** Extract the clock into its own isolated component (`ClockDisplay`) so that only that specific small component re-renders every second, preserving the rest of the application from continuous layout recalculations and React reconciliation overhead.
