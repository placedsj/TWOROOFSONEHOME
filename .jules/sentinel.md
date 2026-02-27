## 2024-12-19 - Exposing Server-Side Secrets to Client
**Vulnerability:** The `vite.config.ts` file was using `loadEnv` to read `GEMINI_API_KEY` and then injecting it into the client bundle via the `define` configuration as `process.env.GEMINI_API_KEY`.
**Learning:** Even if the key is not used in the client code, defining it in `vite.config.ts` makes it available in the global scope of the built application, potentially exposing it to anyone who inspects the client-side code or console.
**Prevention:** Do not use `define` to expose environment variables unless they are explicitly intended for public client-side consumption (e.g., public analytics keys). Sensitive keys should remain on the server or be accessed via a backend proxy.
