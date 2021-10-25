// Package Modules
const router = require('express').Router();

// Custom Modules
const ResultCtrl = require('../../controllers/result.controller');

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
router.get('/all', ResultCtrl.getAll);

// Get Result for a particular game -- Erhabor Destiny

/**
 * @swagger
 * /api/v1/result/{gameId}:
 *  get:
 *   summary: Gets results by game id
 *   description: Returns all the results of the games in the database by the game id
 *   parameters:
 *    - in: path
 *      name: gameId
 *      required: true
 *   responses:
 *    200:
 *      description: A successful response
 *    500:
 *      description: An error occurred
 */

router.get('/:gameId', ResultCtrl.getById);

// Export Module
module.exports = router;
