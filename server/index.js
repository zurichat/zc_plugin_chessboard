// Imports
const path = require("path");
require("express-async-errors");
const express = require("express");
const request = require("request");
const router = require("./src/routes/index");
const { PORT } = require("./src/config");
const errorMiddleware = require("./src/middlewares/error.middleware");
const preRouteMiddlewares = require("./src/middlewares/pre_route.middleware");
const morgan = require("morgan");
//const cors = require("cors");

const app = express();

//app.use(cors());
//morgan

app.use(morgan("dev"));

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
  apis: ["./src/routes/v1/*.js"],
};
const swaggerDocs = swaggerJSDocument(swaggerOptions);
app.use("/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Pre-Route middlewares
preRouteMiddlewares(app);

// All Endpoints routes for backend are defined here
app.use("/api", router);

// temporary - to be removed
app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/d", function (req, res) {
  res.send(`
    <iframe src="https://chess.zuri.chat/chess/home" frameborder="0"></iframe>
  `);
});

// temporary - to be removed, for testing purposess
app.use("/img/chesspieces/wikipedia/*", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "img",
      "chesspieces",
      "wikipedia",
      path.basename(req.originalUrl)
    )
  );
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
