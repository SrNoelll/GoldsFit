import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true, // (forzar puerto)
    origin: 'https://*.ngrok-free.app',
    cors: true,
    allowedHosts: ['.ngrok-free.app']
  }
})
