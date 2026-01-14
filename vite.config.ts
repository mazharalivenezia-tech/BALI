import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: '/BALI/'
  // For Vercel/Custom Domain: '/'
  // We use a conditional check or standard relative pathing.
  // Setting base to './' is often safest for universal deployment.
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});