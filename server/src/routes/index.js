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
    const playerId = 23
    const pieceId = 7
    const initialPosition = 3
    const finalPosition = 2
    const gameId = '234djkla'

    const response = await savePlayerMove({playerId, pieceId, initialPosition, finalPosition, gameId})

    res.json({'message': 'success', data: response})
})

// Export Module
module.exports = router