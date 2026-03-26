## 2024-05-20 - Remediation of Exposed API Keys in Vite Build
**Vulnerability:** The `vite.config.ts` file mapped the sensitive `GEMINI_API_KEY` to client-side globals within the `define` block.
**Learning:** Vite's `define` configuration performs static string replacement at build time; using it to map sensitive server-side environment variables directly embeds the plaintext secret into the client bundle.
**Prevention:** Polyfill `process.env` as an empty object (`define: { 'process.env': {} }`) to prevent client-side crashes, and never map server-side secrets in `define`.