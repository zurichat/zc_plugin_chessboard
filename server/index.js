// Express Server Code will be here
const express = require('express');

const app = express();

// Set Port
const PORT = process.env.PORT || 5000;

// Listen to port
app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`);
});