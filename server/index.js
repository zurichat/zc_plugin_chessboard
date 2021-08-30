const path = require('path');
const http = require('http');
const express = require('express');
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);
const io = new Server(server);

// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('Websocket connected!!!');

  socket.emit('Game Room');
});


// Node API Endpoints
app.get("/ping", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('/info', (req, res) => {
    try {
        res.status(200).json({ plugin: "plugin for Zuri Chat that enables the users play chess within the application" });
    } catch (e) {
        res.status(500).send("Could not fetch plugin information");
    }
});
// Node API Endpoints

// // All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

// Set Port
const PORT = process.env.PORT || 5000;

// Listen to port
server.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`);
});







