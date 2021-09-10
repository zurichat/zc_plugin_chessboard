// Package Modules
const router = require("express").Router();

// Custom Modules
const ResultCtrl = require("../../controllers/result.controller");

/**
 * @swagger
 * /api/v1/result/all:
 *  get:
 *   summary: Gets all game results
 *   description: Returns all the results of the games in the database
 *   responses:
 *    200:
 *      description: A successful response
 *    500:
 *      description: An error occurred
 */
router.get("/all", ResultCtrl.getAll);

// Get Result for a particular game - not implemented -- Erhabor Destiny
// router.get("/:gameId", ResultCtrl.getById);

// Export Module
module.exports = router;
