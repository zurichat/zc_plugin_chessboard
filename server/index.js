const path = require("path");
const http = require("http");
const express = require("express");

const { Server } = require("socket.io");
const { userJoin } = require("./utils/users");
const formatMessage = require("./utils/chessMessage");

const app = express();

const server = http.createServer(app);
const io = new Server(server);

// // Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// For Testing Backend Socket.io
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
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
            `${user.username} joined the game - ${user.chessRoom}`
          )
        );
    }
  );
});

// Node API Endpoints
app.get("/ping", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/info", (req, res) => {
  try {
    res.status(200).json({
      plugin:
        "plugin for Zuri Chat that enables the users play chess within the application",
    });
  } catch (e) {
    res.status(500).send("Could not fetch plugin information");
  }
});

// sidebars Endpoint
app.get("/sidebars", (req, res) => {
  const sidebars = {
    new: "/api/chess/game-type",
    quickPlay: "/api/chess/game-type/quick-play",
    multiplayer: "/api/chess/game-type/multiplayer",
    singleplayer: "/api/chess/game-type/singleplayer",
    tournament: "/api/chess/tournament",
    createTournament: "/api/chess/tournament/create",
    joinTournament: "/api/chess/tournament/join",
    settings: "/api/chess/settings",
    join: "/api/chess/join-live"
  }

  res.status(200).json(sidebars)
});

app.get('/info', (req, res) => {
  try {
    res.status(200).json({ plugin: "plugin for Zuri Chat that enables the users play chess within the application" });
  } catch (e) {
    res.status(500).send("Could not fetch plugin information");
  }
});
// Node API Endpoints


// All url requests with prefix /test will be handled by the public folder
app.get('/test/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// Set Port
const PORT = process.env.PORT || 5000;

// Listen to port
server.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});
