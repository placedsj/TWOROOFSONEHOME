## 2025-02-27 - Vite define Secret Exposure
**Vulnerability:** The Vite configuration exposed `GEMINI_API_KEY` to the client bundle via `define: { 'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY), ... }`.
**Learning:** Vite's `define` performs static string replacement at build time. Mapping sensitive server-side environment variables to client-side globals like `process.env` directly embeds the plaintext secret into the client bundle, even if unused in code.
**Prevention:** Never use Vite's `define` to map sensitive server-side environment variables. If secrets are needed, they must only be accessed on the server-side, and clients should communicate via secure backend proxies.
