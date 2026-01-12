import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// REPLACE 'popx-assignment-react' WITH YOUR EXACT REPO NAME
export default defineConfig({
  plugins: [react()],
  base: '/popx-assignment-react/', 
})
