import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Added this line

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // Added this line\
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
