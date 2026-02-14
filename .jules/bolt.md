## 2026-02-14 - Vite Resolution Ambiguity with Mixed Extensions
**Learning:** In this project, `App.js` and `App.tsx` co-existed, causing Vite/Rollup to fail resolving the default export when imported as `./App`. The `.js` file was resolved first but was empty/commented out.
**Action:** Always use explicit extensions (e.g., `./App.tsx`) when importing local modules if multiple extensions might exist, or ensure legacy files are removed.
