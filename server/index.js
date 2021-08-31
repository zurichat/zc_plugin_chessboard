const path = require("path");
const express = require("express");
const router  = require('./router/index');
const SocketController = require('./controllers/socketController');
const { PORT } = require('./config');

const app = express();

const gameServer = new SocketController(app);
gameServer.InitialGameServer();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

server.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});
