// Package Modules
const router = require("express").Router();

// Custom Modules
const InfoCtrl = require("../controllers/info.controller");
const GameCtrl = require("../controllers/game.controller");
const { savePlayerMove } = require("../db/write");

// Endpoints
router.get("/info", InfoCtrl.getPluginInfo);

router.get("/sideBar", InfoCtrl.getSideBarInfo);

router.get("/createGame", GameCtrl.create);

router.get("/ping", (req, res) => {
    res.json({ message: "Hello from server!" });
});

router.get("/save-move", async(req, res) => {
    const response = await savePlayerMove({playerId:1, initialPosition:3, pieceId:3, finalPosition:9, gameId:26})
  
    res.json({'message': 'move saved successfully', 'data': response})
})

// Export Module
module.exports = router