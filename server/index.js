// Imports
const path = require("path");
require("express-async-errors");
const express = require("express");
const routes = require("./src/routes");
const { PORT } = require("./src/config");

const app = express();

// Pre-Route middlewares
require("./src/middlewares/pre_route.middleware")(app);

// All Endpoints routes for backend are defined here
app.use("/api", routes);

// temporary - to be removed
app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
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
