
## 2024-03-16 - Vite Client Bundle Secret Exposure
**Vulnerability:** The `vite.config.ts` file used the `define` property to inject server-side secrets (`env.GEMINI_API_KEY`) into the global `process.env` accessible by the client bundle.
**Learning:** Using Vite's `define` to expose secrets injects them in plaintext into the final JavaScript bundle, allowing anyone inspecting the client-side code to steal the API key.
**Prevention:** Never use Vite's `define` to inject non-public credentials. Client-side applications must either use `import.meta.env.VITE_*` for explicitly public variables, or handle sensitive API calls via a secure backend proxy to keep keys hidden from the browser.
