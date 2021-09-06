// Package Modules
const router = require("express").Router();

// Custom Modules
const GameCtrl = require("../controllers/game.controller");

// Create Game - http://localhost:3000/api/game/create
router.post("/create", GameCtrl.create);

// Join Game - http://localhost:3000/api/game/join
router.post("/join", GameCtrl.join);

// Get Game By Id - http://localhost:3000/api/game/:id
router.get("/:id", GameCtrl.getById);

// Get All Games - http://localhost:3000/api/game/all
router.get("/all", GameCtrl.getAll);

// Get All Games by User - http://localhost:3000/api/game/all/:userId
router.get("/all/:userId", GameCtrl.getAllByUser);

// Update Game - http://localhost:3000/api/game/:id
router.put("/:id", GameCtrl.update);

// Export Module
module.exports = router