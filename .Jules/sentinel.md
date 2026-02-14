## 2025-05-18 - [Build Conflict due to Legacy Files]
**Vulnerability:** The build process was failing because `index.tsx` was resolving ambiguous imports (e.g., `import App from './App'`) to empty legacy JS files (`App.js`) instead of the correct TypeScript source (`App.tsx`). This could mask compilation errors or lead to deploying broken/insecure code.
**Learning:** In a mixed JS/TS environment, or during migration, explicit file extensions or rigorous cleanup of legacy files is crucial to prevent build ambiguity.
**Prevention:** Always delete legacy JS files when migrating to TS. Ensure build configuration explicitly prioritizes desired extensions if coexistence is necessary.

## 2025-05-18 - [Insecure/Broken Login Implementation]
**Vulnerability:** The `Login.tsx` file contained conflicting implementations due to a bad merge or edit, exposing a version without input validation and preventing the secure version from running.
**Learning:** Broken code can hide security features. Automated checks (linting/build) are essential to catch syntax errors that might disable security logic.
**Prevention:** Use pre-commit hooks and CI pipelines to enforce build success and linting.
