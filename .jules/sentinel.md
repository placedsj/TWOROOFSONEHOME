## 2026-02-18 - [CRITICAL] Build Configuration Secret Injection
**Vulnerability:** The `vite.config.ts` file was configured to inject the `GEMINI_API_KEY` into the client-side bundle via the `define` property. This exposes sensitive credentials to anyone who inspects the compiled JavaScript code.
**Learning:** Build tools often provide mechanisms to inject environment variables, but these should never be used for secrets that must remain private. Any variable injected this way becomes part of the public client-side code.
**Prevention:** Avoid using `define` or similar mechanisms to inject secrets. Use server-side proxies or backend-for-frontend patterns to handle sensitive operations requiring API keys. Verify build configurations do not inadvertently expose environment variables.
