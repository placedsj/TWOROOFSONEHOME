## 2026-04-05 - Hardcoded Secret in Vite Define Config
**Vulnerability:** The `GEMINI_API_KEY` environment variable was statically injected into the client bundle via Vite's `define` configuration.
**Learning:** Vite's `define` block performs literal text replacement on the entire codebase during the build process, which exposes server-side secrets or API keys in the public client bundle even if they are never explicitly accessed or referenced in the frontend application code.
**Prevention:** Never use Vite's `define` to inject sensitive environment variables or secrets. If secrets are needed for external API calls, proxy the requests through a secure backend instead of exposing the credentials to the client.
