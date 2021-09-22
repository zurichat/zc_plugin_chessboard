// Node Core Modules
const path = require("path");

// Package Modules
const express = require("express");
// const helmet = require('helmet');

// Export Module
module.exports = (app) => {
  // enable CORS
  // app.use(
  //   cors({
  //     // Allow all Origins so we can use the live api for local testing
  //     origin: ["*"],
  //   })
  // );
<<<<<<< HEAD
=======

  // enable Cors for all routes
  app.use(cors());
>>>>>>> 3365e578efa4d28bbc873f9ac7578472998826be

  // Secure the app by setting various HTTP headers off.
  // app.use(helmet());

  // Tell express to recognize the incoming Request Object as a JSON Object
  app.use(express.json());

  // Express body parser
  app.use(express.urlencoded({ extended: true }));

  // Set Express Engine for Actual react code build
  app.use(
    express.static(path.join(__dirname, "..", "..", "..", "chess", "dist"))
  );

  app.get("/zuri-zuri-plugin-chessboard.js", (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "..",
        "..",
        "..",
        "chess",
        "dist",
        "zuri-zuri-plugin-chessboard.js"
      )
    );
  });

  // Create express static engine for our zuri_main mini app
  app.use(
    express.static(path.join(__dirname, "..", "..", "..", "client", "dist"))
  );

  return app;
};
