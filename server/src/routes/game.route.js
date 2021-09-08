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

// Watch a Game - Not implemented -- Eniola
// router.patch('/watch', GameCtrl.addSpectator)

// End Game - Not Implemented -- AfricanDev
router.patch("/end", GameCtrl.endGame);

// Resign  - Not implemented -- Ace Anyanwu
// router.patch('/resign', GameCtrl.resign)

// Get Game By Id - Not implemented -- Moses Odunosho
// router.get("/:id", GameCtrl.getById);

// Get All Games by User - not implemented -- shauib mustapha
// router.get("/all/:userId", GameCtrl.getAllByUser);

// Piece Move route -- NotImplemented -- Ndubuisi
// router.patch("/piecemove", GameCtrl.pieceMove)

// Remove spectator -- NotImplemented
// router.patch("/unwatch", GameCtrl.unwatch)

// Export Module
module.exports = router;
