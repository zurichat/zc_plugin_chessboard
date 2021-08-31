const path = require("path");
const express = require("express");
const { PORT } = require("./config");
const routes = require("./routes/index");
const SocketController = require("./controllers/socketController");

const app = express();

const gameServer = new SocketController(app);
const server = gameServer.InitialGameServer();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "..", "client", "build")));

// All Endpoints routes are defined here
app.use("/api", routes);


// temporary
app.use(express.static(path.join(__dirname, "public")));
app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// temporary


// Send all other requests to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});


server.listen(PORT, () => {
  console.log(`Server started listening on port http://127.0.0.1:${PORT}`);
});
