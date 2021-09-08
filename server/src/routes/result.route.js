// Package Modules
const router = require("express").Router();

// Custom Modules
const ResultCtrl = require("../controllers/result.controller");

// Get Result for all games - not implemented -- Ifechukwu Uzukwu
router.get("/all", ResultCtrl.getAll);

// Get Result for a particular game - not implemented -- Erhabor Destiny
// router.get("/:gameId", ResultCtrl.getById);

// Export Module
module.exports = router;
