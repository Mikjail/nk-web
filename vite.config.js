export default {
  root: "./",
  base: "./",
  server: {
    open: "/",
  },
  plugins: [
    {
      name: "watch-external",
      handleHotUpdate({ server }) {
        server.ws.send({
          type: "full-reload",
        });
      },
    },
  ],
};
