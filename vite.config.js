import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Указываем, куда Vite должен сохранить скомпилированные файлы
    emptyOutDir: true
  },
  root: './',  // Указываем корень проекта
  publicDir: 'public',  // Указываем, где находятся статические файлы (index.html)
})
