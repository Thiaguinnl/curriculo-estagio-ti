import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Para GitHub Pages: altere pelo nome do seu repositório
const repoName = 'curriculo-estagio-ti'

export default defineConfig({
  plugins: [react()],
  // Em dev: localhost raiz. Em build: base para GitHub Pages
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
})
