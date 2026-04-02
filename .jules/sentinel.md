## 2024-10-24 - API Key Leak via Vite Config
**Vulnerability:** The Vite configuration used the `define` property to map `env.GEMINI_API_KEY` to `process.env.API_KEY` and `process.env.GEMINI_API_KEY`, which embeds the plaintext secret into the client bundle at build time.
**Learning:** Build-time static string replacements like Vite's `define` indiscriminately inject values into the client-side code, exposing sensitive backend variables.
**Prevention:** Never map sensitive server-side environment variables to client-side globals in Vite configurations. Remove the specific leaked keys or the entire `define` block if unused.
