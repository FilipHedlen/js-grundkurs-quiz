import { defineConfig } from 'vite';
import copy from 'vite-plugin-copy';

export default defineConfig({
  plugins: [
    copy([
      { src: 'public/_redirects', dest: '' }
    ])
  ],
  build: {
    outDir: 'dist',
  },
  base: '/',
});