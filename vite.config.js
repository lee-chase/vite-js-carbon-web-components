import svgLoader from 'vite-svg-loader';

export default {
  define: {
    global: {},
    plugins: svgLoader(),
  },
};
