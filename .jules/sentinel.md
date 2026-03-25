## 2024-03-25 - Vite Static String Replacement Exposes Secrets
**Vulnerability:** The Vite configuration used `define` to map the `GEMINI_API_KEY` server-side environment variable directly to `process.env.API_KEY` and `process.env.GEMINI_API_KEY`.
**Learning:** Vite's `define` configuration performs static string replacement at build time. Using it to map server-side environment variables directly embeds the plaintext secrets into the client-side JavaScript bundle, exposing them to any user.
**Prevention:** Never use Vite's `define` to pass sensitive secrets to the client. Polyfill `process.env` as an empty object (`define: { 'process.env': {} }`) if needed to prevent third-party library crashes, but do not assign secrets to it.
