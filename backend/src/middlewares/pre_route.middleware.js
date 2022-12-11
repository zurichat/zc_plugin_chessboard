// Node Core Modules
const path = require('path');

// Package Modules
const express = require('express');
// const helmet = require('helmet');
const cors = require('cors');

// Export Module
module.exports = (app) => {
  // enable CORS
  app.use(
    cors({
      // Allow all Origins so we can use the live api for local testing
      origin: [
        'https://zuri.chat',
        'http://zuri.chat',
        'https://www.zuri.chat',
        'zuri.chat',
        'http://localhost:9000',
        'http://localhost:5000',
      ],
    }),
  );

  app.use(cors());

  // Tell express to recognize the incoming Request Object as a JSON Object
  app.use(express.json());

  // Express body parser
  app.use(express.urlencoded({ extended: true }));

  // Set Express Engine for Actual react code build
  app.use(express.static(path.join(__dirname, '..', '..', '..', 'frontend', 'dist')));

  app.get('/zuri-zuri-plugin-chessboard.js', (req, res) => {
    res.sendFile(
      path.join(__dirname, '..', '..', '..', 'frontend', 'dist', 'zuri-zuri-plugin-chessboard.js'),
    );
  });

  // Create express static engine for our zuri_main mini app
  app.use(express.static(path.join(__dirname, '..', '..', '..', 'client', 'dist')));

  return app;
};
