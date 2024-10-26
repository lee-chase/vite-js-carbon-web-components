import svgLoader from 'vite-svg-loader';

export default {
  base: '/vite-js-carbon-web-components/',
  define: {
    global: {},
    plugins: svgLoader(),
  },
};
