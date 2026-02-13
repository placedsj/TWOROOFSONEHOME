## 2026-02-13 - Exposed Secrets in Vite Configuration
**Vulnerability:** The `vite.config.ts` file was configured to expose `GEMINI_API_KEY` via the `define` property, making it accessible to the client-side bundle.
**Learning:** Exposing environment variables through `define` in Vite effectively bakes them into the client-side JavaScript, making them visible to anyone who inspects the source code. This bypasses the security of environment variables.
**Prevention:** Avoid using `define` for secrets. Use `import.meta.env` and ensure only public variables are prefixed with `VITE_`. Store secrets securely on the server or use a backend proxy.
