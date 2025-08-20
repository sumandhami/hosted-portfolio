import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Since you're using a custom domain (www.sumandhami.com.np)
  build: {
    outDir: 'dist', // Make sure build output goes to 'dist' folder
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});