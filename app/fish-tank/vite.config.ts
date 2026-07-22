import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
  plugins: [uni()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://fishmanager.top:7965',
        changeOrigin: true
      }
    }
  }
})