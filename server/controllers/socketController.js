const http = require('http');
const { Server } = require('socket.io');
const { userJoin } = require("./utils/users");
const formatMessage = require("./utils/chessMessage");

class SocketController {
    constructor(app){
        this._app = app;
        this._server = http.createServer(app);
        this._io = new Server(this._server);
    }

    InitialGameServer(){
        this._io.on("connection", socket => {
            console.log("Websocket connected!!!");

            socket.on(
                "joinRoom",
                ({ username = "Player 2 ", chessRoom = "elite chess room" }) => {
                    const user = userJoin(socket.id, username, chessRoom);
                    socket.join(user.chessRoom);

                    // Welcome current user to the room
                    socket.emit("message", formatMessage('admin', `You joined the ${user.chessRoom}`));

                    //  Broadcast when a user connects to a particular room
                    socket.broadcast
                        .to(user.chessRoom)
                        .emit(
                        "message",
                        formatMessage(
                            `${user.username}`,
                            `${user.username} joined the game - ${user.chessRoom}`)
                        );
                    }
            );
        });
    }

    _io;
    _app;
    _server;
}

module.exports = SocketController;