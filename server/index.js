// Imports
const path = require("path");
require("express-async-errors");
const express = require("express");
const router = require("./src/routes/index");
const { PORT } = require("./src/config");
const errorMiddleware = require("./src/middlewares/error.middleware");
const preRouteMiddlewares = require("./src/middlewares/pre_route.middleware");

const app = express();

// swagger setup
const swaggerUi = require("swagger-ui-express");
const swaggerJSDocument = require("swagger-jsdoc");
const { generateImage } = require("./src/utils/imageHelper");

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

app.get("/image", async (req, res) => {
  try {
    const src = await generateImage(null, null);
    res.send(`<img src=http://localhost:5050/${src}>`);
  } catch (error) {
    console.log(error);
    res.send("nothing");
  }
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
