// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // CLAVE: Usa el nombre de tu repositorio aquí
  base: '/SoftonCafe/', 
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});