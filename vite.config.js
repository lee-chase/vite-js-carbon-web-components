import { fileURLToPath } from 'url';
import svgLoader from 'vite-svg-loader';

export default {
  base: '/vite-js-carbon-web-components/',
  define: {
    global: {},
    plugins: svgLoader(),
  },
  build: {
    rollupOptions: {
      input: {
        landing: fileURLToPath(new URL('./index.html', import.meta.url)),
        repositories: fileURLToPath(new URL('./repositories.html', import.meta.url)),
      },
    },
  },
};
