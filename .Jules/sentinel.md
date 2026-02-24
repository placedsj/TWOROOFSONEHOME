# Sentinel's Journal

## 2026-02-24 - Vite Config Secret Exposure
**Vulnerability:** The `vite.config.ts` file contained a `define` block that explicitly injected `GEMINI_API_KEY` into the client-side bundle as `process.env.API_KEY`.
**Learning:** Even if a secret is loaded via `loadEnv`, using `define` to assign it to a global variable exposes it in the final build artifact, making it visible to anyone who inspects the client code.
**Prevention:** Avoid using `define` to inject secrets. Use a backend proxy for API calls that require secrets, or ensure secrets are only used in server-side code (if using SSR, which this app is not).
