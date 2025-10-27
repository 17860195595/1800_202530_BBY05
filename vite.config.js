import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  base: '/',  // Use absolute paths from root
  publicDir: 'src/assets',
  
  // Ensure assets are processed
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        // Main entry point
        main: resolve(__dirname, 'index.html'),
        // All page entries
        login: resolve(__dirname, 'src/pages/login.html'),
        mainPage: resolve(__dirname, 'src/pages/main.html'),
        search: resolve(__dirname, 'src/pages/search.html'),
        favoriteList: resolve(__dirname, 'src/pages/favorateList.html'),
        routeDetail: resolve(__dirname, 'src/pages/routeDetail.html'),
        report: resolve(__dirname, 'src/pages/report.html'),
        // Components entry point
        components: resolve(__dirname, 'src/components/components.js'),
      },
      output: {
        // Use absolute paths in built files
        manualChunks: {
          // Group components together
          'components': ['src/components/components.js'],
          // Group vendor libraries
          'vendor': ['firebase/app', 'firebase/auth']
        },
        // Ensure CSS files are properly named
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            if (assetInfo.name.includes('components')) {
              return 'assets/components-[hash].css';
            }
            if (assetInfo.name.includes('global')) {
              return 'assets/global-[hash].css';
            }
            return 'assets/[name]-[hash].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        }
      }
    }
  },
  
  server: {
    port: 5173,
    open: true
  },
  
  preview: {
    port: 4173,
    open: true
  }
});

