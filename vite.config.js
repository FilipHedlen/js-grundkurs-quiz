import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        scoreboard: 'scoreboard.html'
      },
    },
    outDir: 'dist',
  },
  base: '/',
});