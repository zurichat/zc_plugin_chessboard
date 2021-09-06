// Package Modules
const router = require("express").Router();

// Custom Modules
const InfoCtrl = require("../controllers/info.controller");

// Plugin Info Endpoints
// Get Plugin Info - http://localhost:5050/api/info
router.get("/info", InfoCtrl.getPluginInfo);

// Get Sidebar Links - http://localhost:5050/api/sidebar
router.get("/sidebar", InfoCtrl.getSideBarInfo);

// Game Endpoints
router.use("/game", require("./game.route"));

// Result Endpoints
router.get("/result", require("./result.route"));

router.get("/ping", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// Export Module
module.exports = router;
