## 2025-02-27 - Hardcoded API Key Exposure in Vite Config
**Vulnerability:** The `vite.config.ts` file was embedding `GEMINI_API_KEY` directly into the client bundle via the `define` configuration (e.g., `'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY)`).
**Learning:** Vite's `define` performs static string replacement at build time. Exposing server-side secrets or API keys through this configuration directly embeds the plaintext secrets into the frontend code sent to users, which is a critical security vulnerability.
**Prevention:** Never use Vite's `define` to map sensitive server-side variables to client-side globals. Instead, rely on secure backend endpoints to securely interact with third-party APIs using server-side keys.
