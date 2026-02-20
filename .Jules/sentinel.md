
## 2026-02-20 - Refactored Vite Config to Prevent Secret Leakage
**Vulnerability:** `vite.config.ts` was configured to inject `GEMINI_API_KEY` into the client bundle via the `define` property, exposing it to anyone with access to the frontend code if the key was present in the environment.
**Learning:** Using `define` to polyfill `process.env` with secrets is a dangerous pattern in client-side applications, as it hardcodes the secret values into the build artifacts.
**Prevention:** Use `import.meta.env` for public environment variables only. Never expose private keys or secrets in the client bundle. If backend functionality is needed, use a proxy or server-side API route.
