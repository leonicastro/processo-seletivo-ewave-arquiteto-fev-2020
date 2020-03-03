import express from 'express';
import cors from 'cors';
import http from 'http';
import io from 'socket.io';

class App {

  app;
  server;
  socket;

  constructor() {
    this.app = express();

    this.middlewares();
    this.routesConfig();
    this.serverConfig();
    this.registerSocket();
  }

  middlewares() {
    this.app.use((req, res, next) => {
      req.socket = this.socket;
      return next();
    });

    this.app.use(express.json());
    this.app.use(cors());
  }

  routesConfig() {
    this.app.get('/', (req, res) => res.send('Notifyer is running...'))
    this.app.use(require('./notificador'));
  }

  serverConfig() {
    this.server = http.createServer(this.app);
    this.socket = io(this.server);
  }

  registerSocket() {
    this.socket.on('connection', (socket) => {
      console.log(`Cliente conectado via Websocket com o id ${socket.id}`);
    });
  }
}

module.exports = new App();
