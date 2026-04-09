## 2024-04-09 - Client-side API Key Exposure in Vite Config
**Vulnerability:** The `vite.config.ts` was using the `define` option to inject `GEMINI_API_KEY` directly into `process.env` on the client side, which would bundle the secret API key into the public JavaScript output.
**Learning:** Build tools like Vite can expose secrets if environment variables are carelessly injected globally using `define` instead of using proper backend proxying or build-time secrets.
**Prevention:** Never inject secrets directly into the client-side bundle. Always use backend endpoints for sensitive API calls or ensure environment variables used in `define` only contain public configuration data.
