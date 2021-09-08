// Package Modules
const router = require("express").Router();

// Custom
const gameRoute = require("./game.route");
const resultRoute = require("./result.route");
const InfoCtrl = require("../../controllers/info.controller");

// Plugin Info Endpoints
router.get("/info", InfoCtrl.getPluginInfo);

// Get Sidebar Links
router.get("/sidebar", InfoCtrl.getSideBarInfo);

// Game Endpoints
router.use("/game", gameRoute);

// Result Endpoints
router.use("/result", resultRoute);

router.get("/ping", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Export Module
module.exports = router;
