import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Isse build fail nahi hogi agar icons missing hain toh
      manifest: {
        name: 'AI Palm Reader',
        short_name: 'OracleAI',
        description: 'Mystical AI Palm Reading & Astrology',
        theme_color: '#0f0f1a',
        background_color: '#0f0f1a',
        display: 'standalone',
      },
      workbox: {
        // Broad patterns taaki error na aaye
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        cleanupOutdatedCaches: true,
        maximumFileSizeToCacheInBytes: 3000000 // 3MB limit
      }
    })
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 2000
  }
});
