## 2024-05-23 - Secure Defaults: Removing Unused Secret Exposure
**Vulnerability:** The build configuration (`vite.config.ts`) was explicitly exposing `GEMINI_API_KEY` to the client-side bundle via the `define` plugin, even though the application code did not use it.
**Learning:** Configurations that expose environment variables (like `define` in Vite or `EnvironmentPlugin` in Webpack) should only whitelist variables that are strictly necessary for the client. Blindly forwarding keys creates a latent risk where a future developer might accidentally log or leak the global `process.env` object, or the build tool might inline the secret if referenced.
**Prevention:**
1. Audit build configurations to ensure no secrets are passed to the client unless intended.
2. Prefer `import.meta.env` (Vite) which requires variables to be prefixed (e.g., `VITE_`) to be exposed, rather than manual `process.env` polyfilling.
3. Remove unused configuration immediately to reduce the attack surface.
