const path = require('path');
const express = require('express');

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));



// Node API Endpoints
app.get("/ping", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// sidebars Endpoint
app.get("/sidebars", (req, res) => {
  const sidebars = {
    new: "/api/chess/game-type",
    quickPlay: "/api/chess/game-type/quick-play",
    multiplayer: "/api/chess/game-type/multiplayer",
    singleplayer: "/api/chess/game-type/singleplayer",
    tournament: "/api/chess/tournament",
    createTournament: "/api/chess/tournament/create",
    joinTournament: "/api/chess/tournament/join",
    settings: "/api/chess/settings",
    join: "/api/chess/join-live"
}
  
  res.status(200).json(sidebars)
})



// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// Set Port
const PORT = process.env.PORT || 5000;

// Listen to port
app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`);
});