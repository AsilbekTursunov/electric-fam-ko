import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'

// https://vite.dev/config/
export default defineConfig({

  assetsInclude: ['**/*.MOV', '**/*.svg',],
  plugins: [vue(), eslint()],
  // server: {
  //   cors: {
  //     origin: '*',
  //     allowedHeaders: ["Content-Type", "Authorization"],
  //     preflightContinue: true,
  //   },
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3000/api',
  //       changeOrigin: true,
  //       ws: false,
  //       //rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   }
  // },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `
        @use "@/styles/variables.scss" as *;
        @use "@/styles/fonts.scss" as *;
        @use "@/styles/mixins.scss" as *;
        @use "@/styles/common/container.scss" as *;
      `,
      },
    },
  },
  hmr: true, // Enable Hot Module Replacement
  watch: {
    usePolling: true, // Useful for WSL or network issues
  },
  define: {
    'process.env': {}
  },
  build: {  // shu build ni ham
    sourcemap: false,
  }
})
