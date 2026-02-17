## 2025-05-20 - Insecure Environment Variable Injection
**Vulnerability:** The `vite.config.ts` was using `define` to inject `process.env.GEMINI_API_KEY` into the client-side bundle.
**Learning:** Even if an environment variable is loaded from `.env`, using `define` to stringify and inject it makes it part of the public client bundle. This exposes secrets to anyone who can view the source code or network traffic.
**Prevention:** Avoid using `define` for sensitive keys. If a key must be used on the client (which should be avoided for high-security keys), use `import.meta.env` and ensure the variable name is prefixed with `VITE_` only if it's safe to expose. For backend keys, never expose them to the client; use a proxy server instead.
