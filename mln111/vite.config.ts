import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { alias: [{ find: /\/screen\.png$/, replacement: '/screen-1600.webp' }] },
})
