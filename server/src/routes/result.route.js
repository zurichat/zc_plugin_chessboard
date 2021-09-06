// Package Modules
const router = require("express").Router();

// Custom Modules
const ResultCtrl = require("../controllers/result.controller");

// Create Result
router.post("/create", ResultCtrl.create);

// Get All Result - not implemented
// router.get("/all", ResultCtrl.getAll);

// Get Result By Id - not implemented
// router.get("/:id", ResultCtrl.getById);

// Export Module
module.exports = router