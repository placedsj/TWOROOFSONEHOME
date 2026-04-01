## 2024-03-20 - Isolate frequently updating state to subcomponents
**Learning:** In large React components like DigitalBinder, isolate frequently updating state (e.g., setInterval for a clock) into smaller sub-components to prevent massive, unnecessary re-renders of the entire parent component tree.
**Action:** Extract intervals into separate components when refactoring.
