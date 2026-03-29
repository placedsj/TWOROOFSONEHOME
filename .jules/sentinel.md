## 2025-02-28 - Exposed Secrets via Vite Define
**Vulnerability:** The server-side environment variable `GEMINI_API_KEY` was being mapped to client-side globals `process.env.API_KEY` and `process.env.GEMINI_API_KEY` via Vite's `define` configuration.
**Learning:** Vite's `define` performs static string replacement at build time. Mapping sensitive server-side secrets here directly embeds the plaintext secret into the client bundle, exposing it to anyone inspecting the frontend source.
**Prevention:** Never use Vite's `define` to pass sensitive API keys to the client. If `process.env` needs polyfilling for third-party libraries, use an empty object `define: { 'process.env': {} }`.
