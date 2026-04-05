import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), tailwindcss()],
      // 🛡️ SECURITY WARNING: Do not inject GEMINI_API_KEY into the client bundle via `define`.
      // If the client needs to interact with the Gemini API, proxy the requests through a
      // secure backend API route to protect the credentials.
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
