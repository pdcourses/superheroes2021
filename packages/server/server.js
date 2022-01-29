import app from './app';
import http from 'http';

const PORT = process.env.PORT;
const server = http.createServer(app);

server.listen(PORT, '127.0.0.1', () =>
  console.log(`App listening at http://127.0.0.1:${PORT}`)
);
