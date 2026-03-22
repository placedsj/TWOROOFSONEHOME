## 2024-11-20 - Component Isolation for Fast-Updating State
**Learning:** Placing a 1-second `setInterval` clock at the top level of a massive page component (`DigitalBinder`) triggers a full-page re-render every second. React does not optimize this automatically.
**Action:** Always extract fast-updating state (like live clocks or progress bars) into isolated, small React components to contain the re-render blast radius.
