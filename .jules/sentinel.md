## 2024-10-24 - Exposed API Key in Vite Configuration
**Vulnerability:** The Vite configuration (`vite.config.ts`) injected the `GEMINI_API_KEY` directly into the client bundle via the `define` block.
**Learning:** Build tools like Vite replace defined environment variables with their string literal values during the build process, exposing server-side secrets in client-side code if configured improperly.
**Prevention:** Never use Vite's `define` or `import.meta.env` to inject sensitive keys into the frontend. Always proxy API requests requiring secrets through a secure backend server.
