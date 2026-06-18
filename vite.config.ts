import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Root base for custom domain (https://courtneystokes.dev/).
// If deploying to username.github.io/repo-name only, set base: '/your-repo-name/'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/',
})
