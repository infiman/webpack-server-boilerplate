import http from 'http';
import app from './app';

function createServer(listener) {
  const server = http.createServer(listener);

  server.listen(3000);

  return server;
}

let currentServer = createServer(app);

if (module.hot) {
  module.hot.accept('./app', () => {
    currentServer.close(() => {
      currentServer = createServer(app);
    });
  });
}
