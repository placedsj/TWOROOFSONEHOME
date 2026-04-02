## 2026-04-02 - Prevent API Key exposure in Vite Client Bundle
**Vulnerability:** The GEMINI_API_KEY environment variable was mapped to process.env.API_KEY globally via Vite's define config.
**Learning:** Vite's define configuration performs static string replacement at build time. Mapping sensitive server-side environment variables to client-side globals like process.env directly embeds the plaintext secret into the client bundle.
**Prevention:** Never use Vite's define block for sensitive environment variables. Either rely strictly on server-side rendering or use restricted proxy endpoints for client access to APIs.
