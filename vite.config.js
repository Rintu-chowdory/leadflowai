import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// '/leadflowai/' for GitHub Pages; Vercel overrides via VITE_BASE in vercel.json
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/leadflowai/',
})
