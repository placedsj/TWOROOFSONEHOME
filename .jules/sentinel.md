## 2026-02-15 - Legacy JS Conflicts
**Vulnerability:** Legacy `.js` files (e.g., `pages/Login.js`, `App.js`) were present alongside `.tsx` files in a Vite project.
**Learning:** Vite/Rollup resolved imports without extensions (e.g., `import Login from './pages/Login'`) to the `.js` files first, causing stale, insecure code to be served even after `.tsx` updates were made. This effectively masked security fixes.
**Prevention:** Explicitly remove legacy `.js` files when migrating to TypeScript to ensure the build pipeline uses the correct, updated source code.
