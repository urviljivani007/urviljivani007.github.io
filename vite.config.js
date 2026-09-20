import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative so the build works both at a domain
// root (username.github.io) and under a subpath (username.github.io/repo).
export default defineConfig({
  plugins: [react()],
  base: './',
})
