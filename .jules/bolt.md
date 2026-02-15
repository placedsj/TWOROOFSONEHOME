## 2024-05-23 - [Conflict Resolution]
**Learning:** Legacy `.js` files alongside `.tsx` files in `pages/` caused Vite to resolve the empty/legacy `.js` files instead of the source code, breaking the build.
**Action:** Always check for and remove corresponding `.js` files when working in a TypeScript project if build errors occur related to missing exports.
