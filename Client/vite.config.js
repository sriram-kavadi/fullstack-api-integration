import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://fullstack-api-integration.onrender.com",
        changeOrigin: true,
        secure: true,
      },
      "/hey": {
        target: "https://fullstack-api-integration.onrender.com",
        changeOrigin: true,
        secure: true,
      }
    }
  }
})
