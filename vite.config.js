import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: './',  // Use relative paths for deployment
  publicDir: 'src/assets',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Use relative paths in built files
        manualChunks: undefined
      }
    }
  },
  server: {
    port: 5173,
    open: true
  }
});

