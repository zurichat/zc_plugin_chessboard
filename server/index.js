const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

// // Have Node serve the files for our built React app
// // app.use(express.static(path.resolve(__dirname, '../client/build')));

io.on('connection', (socket) => {
  console.log('Websocket connected!!!');

  socket.emit('Game Room');

});

// // Node API Endpoints
// app.get("/ping", (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

// Node API Endpoints

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

// Set Port
const PORT = process.env.PORT || 5000;

// Listen to port
server.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`);
});







