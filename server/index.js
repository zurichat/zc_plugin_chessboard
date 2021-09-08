// Imports
const path = require("path");
require("express-async-errors");
const express = require("express");
const router = require("./src/routes/index");
const { PORT } = require("./src/config");
const errorMiddleware = require("./src/middlewares/error.middleware");
const preRouteMiddlewares = require("./src/middlewares/pre_route.middleware");

const app = express();

// Pre-Route middlewares
preRouteMiddlewares(app);

// All Endpoints routes for backend are defined here
app.use("/api", router);

// temporary - to be removed
app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
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
