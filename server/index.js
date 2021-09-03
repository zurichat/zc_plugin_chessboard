// Node Core Modules 
const path = require("path");
const http = require("http");

// Package Modules
require('express-async-errors');
const express = require("express");
const socketIO = require("socket.io");

// Custom Modules
const routes = require("./src/routes");
const { PORT } = require("./src/config");

// Variables
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Pre-Route middlewares
require("./src/middlewares/pre_route.middleware")(app);

// All Endpoints routes for backend are defined here
app.use("/api", routes);

// temporary - to be removed
app.get("/test", (req, res) => { res.sendFile(path.join(__dirname, "public", "index.html")); });

//temporary also - to be removed
app.get("/dbtest", (req, res) => { res.sendFile(path.join(__dirname, "public", "userTest.html"))})


// Handle Socket Connections
io.on('connection', (socket) => { require("./src/socket/")(socket) });

// Error middlewares
require("./src/middlewares/error.middleware")(app);

// The server should start listening
server.listen(PORT, () => {
    console.log(`Server started listening on port http://127.0.0.1:${PORT}`);
});

// Listen for server error
server.on("error", (error) => {
    console.error(`<::: An error occurred on the server: \n ${error}`);
});