## 2026-03-17 - Vite Client Bundle Environment Variable Exposure
**Vulnerability:** Found `GEMINI_API_KEY` being injected into the client-side build using Vite's `define` configuration.
**Learning:** Using `define` in `vite.config.ts` to map server-side secrets to `process.env` embeds those secrets in plaintext within the compiled client-side JavaScript bundle, leading to critical key exposure.
**Prevention:** Never use Vite `define` for sensitive keys. Only expose safe, public configuration using the `VITE_` prefix and `import.meta.env`, keeping sensitive keys strictly on the server backend.
