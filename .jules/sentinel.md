## 2024-04-02 - Vite Define Secret Exposure
**Vulnerability:** The Vite configuration used `define` to map `process.env.GEMINI_API_KEY` to the environment variable `env.GEMINI_API_KEY`.
**Learning:** Vite's `define` configuration performs static string replacement at build time. Using it to map server-side environment variables to client-side globals like `process.env` directly embeds the plaintext secret into the client bundle, exposing it to any user.
**Prevention:** Never use Vite's `define` to inject sensitive server-side environment variables into the client bundle. Only inject non-sensitive configuration values. If API calls are needed, they should be made from a backend server or via a secure proxy, not directly from the client with an embedded key.
