import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        ok: resolve(__dirname, 'ok.html'),
        buggy: resolve(__dirname, 'buggy.html'),
      },
    },
  },
})
