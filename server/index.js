const path = require('path');
const express = require('express');

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));



// Node API Endpoints
app.get("/ping", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('/info', (req, res) => {
    try{
        res.status(200).json({ plugin: "plugin for Zuri Chat that enables the users play chess within the application" })
    }catch(e){
        res.status(500).send("Could not fetch plugin information")
    }
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