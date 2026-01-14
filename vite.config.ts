import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use relative base path to support GitHub Pages subfolders and Vercel roots simultaneously
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
  },
  resolve: {
    alias: {
      // Ensure absolute imports work correctly in a flat structure
      '/index.tsx': './index.tsx'
    }
  }
});