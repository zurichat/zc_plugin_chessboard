// Package Modules
const router = require("express").Router();

// Custom Modules
const GameCtrl = require("../controllers/game.controller");

// Swagger Documentation

/**
 * @swagger
 *  definitions:
 *   owner:
 *    type: object
 *    properties:
 *     user_id:
 *      type: integer
 *      description: The user id of the owner of the game
 *      example: 2
 *     user_name: 
 *      type: string
 *      description: The user name of the owner of the game
 *      required: true
 *      example: "John Doe"
 *     image_url:
 *      type: string
 *    
 *   opponent:
 *    type: object
 *    properties:
 *     user_id:
 *      type: integer
 *      description: The user id of the owner of the game
 *      example: 2
 *     user_name: 
 *      type: string
 *      description: The user name of the owner of the game
 *      required: true
 *      example: "John Doe"
 *     image_url:
 *      type: string                     
 */


// Create A Game

/**
 * @swagger
 * /create:
 *  post:
 *   summary: Create a new game
 *   description: Create a new game
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#/definitions/owner'
 *   responses:
 *    200:
 *      description: A successful response
 *    500:
 *      description: An error occurred
*/
router.post("/create", GameCtrl.create);


// Join A Game

/**
 * @swagger
 * /join:
 *  post:
 *   summary: join a game
 *   description: Join a game
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#/definitions/opponent'
 *   responses:
 *    200:
 *      description: A successful response
 *    500:
 *      description: An error occurred
*/
router.post("/join", GameCtrl.join);

// Get All Games
router.get("/all", GameCtrl.getAll);

// Watch a Game -- @eni4sure
router.patch("/watch", GameCtrl.addSpectator);

//Piece Move route
router.patch("/pieceemove", GameCtrl.pieceMove);

// End Game - Not Implemented -- AfricanDev
router.patch("/end", GameCtrl.endGame);

// Resign  - Not implemented -- Ace Anyanwu
// router.patch('/resign', GameCtrl.resign)

// Get Game By Id - Not implemented -- Moses Odunosho
// router.get("/:id", GameCtrl.getById);

// Get All Games by User - not implemented -- shauib mustapha
// router.get("/all/:userId", GameCtrl.getAllByUser);

// Remove spectator -- NotImplemented --ibk
router.patch("/unwatch", GameCtrl.removeSpectator);

// Export Module
module.exports = router;
