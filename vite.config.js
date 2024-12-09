import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        ok: 'ok.html',
        buggy: 'buggy.html'
      }
    }
  }
})
