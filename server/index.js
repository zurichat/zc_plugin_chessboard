const path = require('path');
const express = require('express');

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));



// Node API Endpoints
app.get("/ping", (req, res) => {
    res.json({ message: "Hello from server!" });
});
// Node API Endpoints



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