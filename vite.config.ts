import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'portfolio' with your actual repository name if different
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Required for GitHub Pages
  build: {
    outDir: 'dist', // Ensures build output is consistent
  },
});
