import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    sourcemap: true, // Включаем sourcemap для дебага в продакшне
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173, // локальный порт, можно поменять
    open: true
  }
})
