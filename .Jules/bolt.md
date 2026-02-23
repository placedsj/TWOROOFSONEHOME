## 2026-02-23 - Heavy Route Component Bundling
**Learning:** The `DigitalBinder.tsx` component is exceptionally large (~600 lines + many SVG icons) and was being statically imported in `App.tsx`. This caused the main bundle to include all this code even for users visiting the landing page, impacting initial load performance.
**Action:** Always verify the size of route components. For heavy, non-critical routes (like dashboards or complex tools), use `React.lazy` and `Suspense` to split them from the main bundle, keeping the critical path (Home/Login) lightweight.
