import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/NavAndSideBar/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        notfound: 'public/404.html',
      },
    },
  },
});
