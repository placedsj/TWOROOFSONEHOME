## 2024-05-22 - Login Form UX & Build Hygiene
**Learning:** Duplicate `.js` files (e.g., `App.js`, `pages/Login.js`) caused build failures by taking precedence over TypeScript files.
**Action:** Always check for and remove legacy JS files when working in a TypeScript project to ensure the correct file is being built.

## 2024-05-22 - Micro-Interaction Value
**Learning:** Adding a simple loading state (spinner + disabled button) transforms a jarring `alert()` into a professional interaction.
**Action:** Replace all `alert()` based feedback with inline UI states.
