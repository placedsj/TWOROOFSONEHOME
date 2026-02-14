## 2024-05-23 - Code Splitting & Build Stability
**Learning:** Duplicate files (e.g., `App.js` vs `App.tsx`) confuse bundlers like Vite/Rollup when using extensionless imports, leading to build failures or loading stale code.
**Action:** Always verify and remove legacy JS files when migrating to TypeScript or refactoring to ensure the bundler targets the correct source.

**Learning:** `wouter` routing works seamlessly with `React.lazy` and `Suspense` when the entire `Switch` or `Router` is wrapped in a `Suspense` boundary.
**Action:** Use this pattern for route-level code splitting in lightweight router setups.

**Learning:** Malformed component files (like the broken `Login.tsx`) can silently exist until a strict build process is enforced.
**Action:** Ensure `pnpm build` runs successfully before attempting performance optimizations to establish a stable baseline.
