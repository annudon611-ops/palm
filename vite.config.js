import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Manual manifest to avoid glob errors
      manifest: {
        name: 'AI Palm Reader',
        short_name: 'OracleAI',
        theme_color: '#0f0f1a',
        background_color: '#0f0f1a',
        display: 'standalone',
        icons: [
          { src: 'favicon.svg', sizes: '192x192', type: 'image/svg+xml' }
        ]
      },
      workbox: {
        // Build ko force-pass karne ke liye
        globPatterns: [], 
        runtimeCaching: [{
          urlPattern: ({ request }) => request.destination === 'document',
          handler: 'NetworkFirst',
          options: { cacheName: 'html-cache' }
        }]
      }
    })
  ],
  build: { outDir: 'dist', sourcemap: false }
});
