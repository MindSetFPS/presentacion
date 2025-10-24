import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
    },
  },
  server: {
    fs: {
      allow: [
        '/home/daniel/.bun/install/global/node_modules/'
      ]
    }
  }
})