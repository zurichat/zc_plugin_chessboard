// Package Modules
const router = require("express").Router();

// Custom Modules
const ResultCtrl = require("../controllers/result.controller");

// Create Result
router.post("/create", ResultCtrl.create);

// Export Module
module.exports = router