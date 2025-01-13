import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import vitePluginSvgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/global.scss";',
      },
    },
  },
  plugins: [
    react(),
    ViteImageOptimizer(),
    vitePluginSvgr({
      include: './src/**/*.svg',
      svgrOptions: {
        svgProps: { className: 'svg-icon' },
        dimensions: true,
        exportType: 'default',
        plugins: ['@svgr/plugin-jsx'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
