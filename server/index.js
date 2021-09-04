// Imports
const path = require("path");
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
app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//temporary also - to be removed
app.get("/dbtest", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "userTest.html"));
});

// Error middlewares
errorMiddleware(app);

// The server should start listening
app.listen(PORT, () => {
  console.log(`Server started listening on port http://127.0.0.1:${PORT}`);
});

// Listen for server error
app.on("error", (error) => {
  console.error(`<::: An error occurred on the server: \n ${error}`);
});
