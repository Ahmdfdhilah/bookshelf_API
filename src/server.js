const Hapi = require('@hapi/hapi');
const routes = require('./route');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Bookshelf API sedang berjalan di ${server.info.uri}`);
};

init();