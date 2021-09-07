// Package Modules
const router = require("express").Router();

// Custom Modules
const GameCtrl = require("../controllers/game.controller");

// Create A Game
router.post("/create", GameCtrl.create);

// Join A Game
router.post("/join", GameCtrl.join);

// Get All Games
router.get("/all", GameCtrl.getAll);

// Watch a Game - Not implemented
// router.post('/watch', GameCtrl.addSpectator)

// End Game - Not Implemented
// router.post("/end", GameCtrl.endGame)

// Resign  - Not implemented
// router.post('/resign', GameCtrl.resign)

// Get Game By Id - Not implemented
// router.get("/:id", GameCtrl.getById);

// Get All Games by User - not implemented
// router.get("/all/:userId", GameCtrl.getAllByUser);

// Export Module
module.exports = router;
