// Package Modules
const router = require("express").Router();

// Custom Modules
const InfoCtrl = require("../controllers/info.controller");
const GameCtrl = require("../controllers/game.controller");

// Endpoints
router.get("/info", InfoCtrl.getPluginInfo);

router.get("/sideBar", InfoCtrl.getSideBarInfo);

router.get("/createGame", GameCtrl.create);

router.get("/ping", (req, res) => {
    res.json({ message: "Hello from server!" });
});

router.get("/devping", (req, res) => {
    res.json({ message: "Hello from server autodeployed from dev branch!" });
});

// Export Module
module.exports = router