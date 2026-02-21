## 2026-02-21 - Prevented Accidental Secret Exposure in Client Bundle

**Vulnerability:** The `vite.config.ts` file contained a `define` block that manually exposed `GEMINI_API_KEY` to the client-side bundle as `process.env.API_KEY` and `process.env.GEMINI_API_KEY`. While the current client code wasn't using these variables, this configuration would have baked the secret key into the public bundle if any code had referenced `process.env.API_KEY`.

**Learning:** `vite.config.ts` should not manually expose environment variables using `define` unless they are explicitly intended for public consumption. Prefixing environment variables with `VITE_` is the standard way to expose them, and manual `define` overrides can bypass safety checks or expose non-prefixed secrets.

**Prevention:** Avoid using `define` to polyfill `process.env` with sensitive variables. Use `import.meta.env` and proper `VITE_` prefixing for public variables. Ensure `vite.config.ts` does not contain logic that iterates over and exposes all environment variables or specific secrets.
