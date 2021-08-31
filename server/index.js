const path = require("path");
const express = require("express");
const router = require("./router/index");
const SocketController = require("./controllers/socketController");
const { PORT } = require("./config");

const app = express();

const gameServer = new SocketController(app);
const server = gameServer.InitialGameServer();

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.use("/api", router);

server.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});
