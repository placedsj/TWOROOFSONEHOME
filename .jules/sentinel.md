## 2025-03-01 - Vite Define API Key Exposure
**Vulnerability:** GEMINI_API_KEY was exposed to the client-side via Vite's `define` configuration.
**Learning:** Hardcoding sensitive environment variables in `vite.config.ts` under `define` embeds them into the final frontend bundle in plaintext.
**Prevention:** Never map sensitive server-side secrets like `process.env.GEMINI_API_KEY` to client-side globals in build configurations.
