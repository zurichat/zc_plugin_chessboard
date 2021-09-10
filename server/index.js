// Imports
const path = require("path");
require("express-async-errors");
const express = require("express");
const routes = require("./src/routes");
const { PORT } = require("./src/config");
const errorMiddleware = require("./src/middlewares/error.middleware");
const preRouteMiddlewares = require("./src/middlewares/pre_route.middleware");

const app = express();

// swagger setup
const swaggerUi = require("swagger-ui-express");
const swaggerJSDocument = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chess Plugin API",
      version: "1.0.0",
      description: "Chess plugin api for zuri chat application documentation",
      servers: ["https://chess.zuri.chat/api"],
    },
  },
  apis: ["./src/routes/*.js"],
};
const swaggerDocs = swaggerJSDocument(swaggerOptions);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Pre-Route middlewares
preRouteMiddlewares(app);

// All Endpoints routes for backend are defined here
app.use("/api", routes);

// temporary - to be removed
app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/test_wb", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "whiteboardtest.html"));
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
