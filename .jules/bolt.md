## 2024-04-14 - Isolate Rapidly Updating State in React Components
**Learning:** Placing a `setInterval` timer that updates a state variable every second in a top-level component (`DigitalBinder.tsx`) causes the entire component tree, including potentially expensive child components and complex DOM structures, to re-render every second.
**Action:** Extract the rapidly updating state and its rendering logic into a small, dedicated child component. This isolates the re-renders to just that tiny component, preserving the performance of the rest of the application.
