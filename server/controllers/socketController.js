const http = require("http");
const { Server } = require("socket.io");
const joinRoomHandler = require("../socketHandlers/joinRoomHandler");
const leaveRoomHandler = require("../socketHandlers/leaveRoomHandler");

class SocketController {
  constructor(app) {
    this._app = app;
    this._server = http.createServer(app);
    this._io = new Server(this._server);
  }

  InitialGameServer() {
    this._io.on("connection", (socket) => {
      console.log("Websocket connected!!!");

      socket.on("joinRoom", joinRoomHandler(socket));
      socket.on("resign", leaveRoomHandler(socket));
    });

    return this._server;
  }

  _io;
  _app;
  _server;
}

module.exports = SocketController;
