export default {
  root: './',
  base: './',
  server: {
    open: '/index.html',
  },
  plugins: [
    {
      name: 'watch-external',
      handleHotUpdate({ server }) {
        server.ws.send({
          type: 'full-reload',
        });
      },
    },
  ],
}