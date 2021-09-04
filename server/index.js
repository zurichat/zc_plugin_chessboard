<<<<<<< HEAD
// Node Core Modules 
const path = require("path");
const http = require("http");

// Package Modules
require('express-async-errors');
=======
// Imports
const path = require("path");
>>>>>>> be71c77ab8ad17a538d513616fe38a58d96929cb
const express = require("express");
const routes = require("./src/routes");
const middlewares = require("./src/middlewares/pre_route.middleware");
const errorMiddleware = require("./src/middlewares/error.middleware");
const { PORT } = require("./src/config");
require("express-async-errors");

const app = express();

// Pre-Route middlewares
middlewares(app);

// All Endpoints routes for backend are defined here
app.use("/api", routes);

// temporary - to be removed
app.get("/test", (req, res) => { res.sendFile(path.join(__dirname, "public", "index.html")); });


<<<<<<< HEAD
// Handle Socket Connections
io.on('connection', (socket) => { require("./src/socket/")(socket) });

=======
>>>>>>> be71c77ab8ad17a538d513616fe38a58d96929cb
// Error middlewares
errorMiddleware(app);

// The server should start listening
<<<<<<< HEAD
server.listen(PORT, () => {
    console.log(`Server started listening on port http://127.0.0.1:${PORT}`);
});

// Listen for server error
server.on("error", (error) => {
    console.error(`<::: An error occurred on the server: \n ${error}`);
});
=======
app.listen(PORT, () => {
  console.log(`Server started listening on port http://127.0.0.1:${PORT}`);
});

// Listen for server error
app.on("error", (error) => {
  console.error(`<::: An error occurred on the server: \n ${error}`);
});
>>>>>>> be71c77ab8ad17a538d513616fe38a58d96929cb
