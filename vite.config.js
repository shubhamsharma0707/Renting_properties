import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/Renting_properties/',
  publicDir: 'public',
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2020',
    // Split large vendor libs into separate chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          three:   ['three'],
          leaflet: ['leaflet'],
        }
      }
    }
  }
});
