## 2024-05-24 - Exposed Gemini API Key
**Vulnerability:** Client-side exposure of API key in `vite.config.ts`.
**Learning:** Vite's `define` with `JSON.stringify(env.GEMINI_API_KEY)` replaces occurrences of `process.env.GEMINI_API_KEY` at build time, statically embedding the plaintext API key in the client bundle.
**Prevention:** Do not expose sensitive API keys via `define` in `vite.config.ts`. When replacing an unused mapping that was mapped to `process.env`, replace it with an empty object (`define: { 'process.env': {} }`) instead of deleting the block to prevent ReferenceErrors from third-party libraries. Also, always verify client code does not functionally depend on the removed key, or securely proxy it if it does.
