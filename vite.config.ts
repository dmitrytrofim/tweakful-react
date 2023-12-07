import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [
  react(),
  viteStaticCopy({
   targets: [
    {
     src: 'src/assets/img/*',
     dest: 'assets/img',
    },
    {
     src: 'src/assets/files/*',
     dest: 'assets/files',
    },
    {
     src: 'src/assets/fonts/*',
     dest: 'assets/fonts',
    },
    {
     src: 'src/assets/sprite.svg',
     dest: 'assets',
    },
   ],
  }),
 ],
 base: './',
 // server: {
 //  open: true,
 // },
});
