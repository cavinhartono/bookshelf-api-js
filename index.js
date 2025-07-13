import Hapi from "@hapi/hapi";
import Routes from "./src/routes.js";

const main = async () => {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });
  server.route(Routes);
  await server.start();
  console.log("Server on port ", 9000);
};

main();
