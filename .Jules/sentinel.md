## 2024-05-22 - Critical: Environment Variable Exposure in Client Bundle
**Vulnerability:** The `vite.config.ts` configuration used `define` to inject `process.env.GEMINI_API_KEY` into the client-side bundle. This exposes the API key to anyone with access to the frontend code.
**Learning:** Vite's `define` performs static replacement during build. Any value passed to it is embedded in the output.
**Prevention:** Never use `define` for secrets. Use backend proxies or environment variables that are explicitly safe for public exposure (e.g. `VITE_PUBLIC_`).
