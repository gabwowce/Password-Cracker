import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Password-Cracker/', // 👈 čia įrašytas tavo GitHub repo pavadinimas
  plugins: [react(), tailwindcss()],
})
