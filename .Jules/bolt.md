## 2024-05-23 - Route-Based Code Splitting
**Learning:** The application was bundling all route components (`DigitalBinder`, `Dashboard`, `Login`) into the main bundle, causing unnecessary payload on initial load. `DigitalBinder` is particularly large due to its sub-components and SVG icons.
**Action:** Implemented `React.lazy` and `Suspense` in `App.tsx` to split these routes into separate chunks. Moving forward, any new heavy route should be lazy-loaded by default, while critical routes (like `Home`) should remain eager.
