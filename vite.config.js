import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // === DODAJEMO OVAJ DIO ZA PROXY ===
  server: {
    proxy: {
      // Svaki zahtjev koji počinje s '/maps-api' bit će preusmjeren na Googleov server
      '/maps-api': {
        target: 'https://maps.googleapis.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/maps-api/, ''), // Uklanja '/maps-api' iz putanje
      },
    },
  },
})