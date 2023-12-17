export default {
  root: "./",
  base: "./",
  server: {
    open: "/",
  },
  build: {
    outDir: "../nastya-web-prod/", // specify your output directory
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
