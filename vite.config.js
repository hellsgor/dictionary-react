import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  css: {
    devSourcemap: true,
  },
  plugins: [react()],
});
