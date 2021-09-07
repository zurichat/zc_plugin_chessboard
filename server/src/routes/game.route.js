// Package Modules
const router = require("express").Router();

// Custom Modules
const GameCtrl = require("../controllers/game.controller");

// Create A Game
router.post("/create", GameCtrl.create);

// Join A Game
router.post("/join", GameCtrl.join);

// Watch a Game
// router.post('/watch')

// End Game
// router.post("/end")

// Get Game By Id - Not implemented
// router.get("/:id", GameCtrl.getById);

// Get All Games -
router.get("/all", GameCtrl.getAll);

// Get All Games by User - not implemented - http://127.0.0.1:5050/api/game/all/:userId
// router.get("/all/:userId", GameCtrl.getAllByUser);

// Update Game - not implemented - http://127.0.0.1:5050/api/game/:id
// router.put("/:id", GameCtrl.update);

// Export Module
module.exports = router;
