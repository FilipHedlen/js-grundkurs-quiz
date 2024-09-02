import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'public/_redirects', dest: '' },
      ],
    }),
  ],
  build: {
    outDir: 'dist',
  },
  base: '/',
});