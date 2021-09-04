// Node Core Modules
const path = require("path");
const Centrifuge = require("centrifuge");
const WebSocket = require("ws");

var centrifuge = new Centrifuge("ws://localhost:8000/connection/websocket", {
  websocket: WebSocket,
});

centrifuge.setToken(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NSIsImV4cCI6MTYzMTM1ODc1OH0.4c7pAxI0L242-35QYMF28mlujF9dbuZK6WRgxygrE7Q"
);

centrifuge.on("connect", function (ctx) {
  console.log("connected", ctx);
});

centrifuge.on("disconnect", function (ctx) {
  console.log("disconnected", ctx);
});

const subscription = centrifuge.subscribe("team-testla", function (ctx) {
  console.log(ctx);
});

centrifuge.connect();

// Package Modules
require("express-async-errors");
const express = require("express");

// Custom Modules
const routes = require("./src/routes");
const { PORT } = require("./src/config");

// Variables
const app = express();

// Pre-Route middlewares
require("./src/middlewares/pre_route.middleware")(app);

// All Endpoints routes for backend are defined here
app.use("/api", routes);

// temporary - to be removed
app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/publish", async (req, res) => {
  await subscription.publish({ jon: "snow" });
  res.send("Okay");
});

//temporary also - to be removed
app.get("/dbtest", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "userTest.html"));
});

// Error middlewares
require("./src/middlewares/error.middleware")(app);

// The server should start listening
app.listen(PORT, () => {
  console.log(`Server started listening on port http://127.0.0.1:${PORT}`);
});

// Listen for server error
app.on("error", (error) => {
  console.error(`<::: An error occurred on the server: \n ${error}`);
});
