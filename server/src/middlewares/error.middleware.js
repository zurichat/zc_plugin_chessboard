// Node Core Modules
const path = require("path");

// Custom Modules
const response = require("../utils/response");

// Possible error names
const errorNames = ["CastError", "SyntaxError"];

module.exports = (app) => {
    // Send all 404 requests not handled by node to the React app
    app.use("*", (req, res) => {
        res.sendFile(
            path.join(__dirname, "..", "..", "..", "client", "build", "index.html")
        );
    });

    // Error handling middleware
    app.use((error, req, res) => {
        if (error.name == "CustomError") {
            res.status(error.status).send(response(error.message, null, false));
        } else if (errorNames.includes(error.name)) {
            res.status(400).send(response(error.message, null, false));
        } else {
            res.status(500).send(response(error.message, null, false));
        }
    });

    return app;
};
