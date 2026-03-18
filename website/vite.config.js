/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from "rollup-plugin-visualizer";


export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024, // Only compress files larger than 1KB
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
    }),
    visualizer({
      open: false, // Don't auto-open
      gzipSize: true,
      brotliSize: true,
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['clsx', 'tailwind-merge'],
    include: ['react', 'react-dom', 'react-router-dom', 'motion'], // Pre-bundle common dependencies
    esbuildOptions: {
      target: 'es2020',
    }
  },
  build: {
    cssCodeSplit: true,
    minify: 'esbuild',
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': ['lucide-react', 'react-icons'],
          'motion': ['motion'],
          'supabase': ['@supabase/supabase-js'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false, // Faster builds
    sourcemap: false, // Disable sourcemaps in production for smaller files
  },
  server: {
    hmr: {
      overlay: false, // Disable error overlay for better performance
    },
  },
});
