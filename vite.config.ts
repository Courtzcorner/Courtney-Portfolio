import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Replace the base path below with your GitHub repo name when deploying to GitHub Pages.
// Example: if your repo is github.com/courtneystokes/portfolio, set base: '/portfolio/'
// For local development, keep base: '/'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/Courtney-Portfolio/',
})
