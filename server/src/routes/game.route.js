// Package Modules
const router = require("express").Router();

// Custom Modules
const GameCtrl = require("../controllers/game.controller");

// Create A Game - http://localhost:5050/api/game/create
router.post("/create", GameCtrl.create);

// Join A Game - http://localhost:5050/api/game/join
router.post("/join", GameCtrl.join);

// Get Game By Id - not implemented - http://localhost:5050/api/game/:id
// router.get("/:id", GameCtrl.getById);

// Get All Games - http://localhost:5050/api/game/all
router.get("/all", GameCtrl.getAll);

// Get All Games by User - not implemented - http://localhost:5050/api/game/all/:userId
// router.get("/all/:userId", GameCtrl.getAllByUser);

// Update Game - not implemented - http://localhost:5050/api/game/:id
// router.put("/:id", GameCtrl.update);

// Export Module
module.exports = router;