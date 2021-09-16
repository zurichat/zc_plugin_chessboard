// Package Modules
const router = require("express").Router();

// Custom Modules
const GameCtrl = require("../../controllers/game.controller");

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
 *     game_id:
 *      type: string
 *      description: The game id of the game the opponent wants to join
 *      example: juodiejopk0e
 *     user_id:
 *      type: integer
 *      description: The user id of the opponent of the game
 *      example: 2
 *     user_name:
 *      type: string
 *      description: The user name of the owner of the game
 *      required: true
 *      example: "John Doe"
 *     image_url:
 *      type: string
 *
 *   watchInput:
 *    type: object
 *    properties:
 *     user_id:
 *      type: integer
 *      description: The user id of the watcher of the game
 *      required: true
 *      example: 2
 *     user_name:
 *      type: string
 *      description: The user name of the watch of the game
 *      required: true
 *      example: "John_Doe"
 *     game_id:
 *      type: string
 *      description: The Id of the game the user wants to watch
 *      required: true
 *     image_url:
 *      type: string
 *
 *   pieceMoveInput:
 *    type: object
 *    properties:
 *     player_id:
 *      type: integer
 *      description: The user id of the player of the move
 *      required: true
 *      example: 2
 *     position_fen:
 *      type: string
 *      description: The current chess cordinate for the move
 *      required: true
 *      example: "A1-A2"
 *     game_id:
 *      type: string
 *      description: The Id of the game the user wants to watch
 *      required: true
 *     board_state:
 *      type: string
 *      required: true
 *      description: The current board state as gotten from the chess library
 *
 *   endgameInput:
 *    type: object
 *    properties:
 *     user_id:
 *      type: integer
 *      description: The user id of the winner of the game, make it null for a draw.
 *      required: true
 *      example: 2
 *     game_id:
 *      type: string
 *      description: The Id of the game the user wants to watch
 *      required: true
 *
 *   unwatchInput:
 *    type: object
 *    properties:
 *     user_id:
 *      type: integer
 *      description: The user id of the spectator
 *      required: true
 *      example: 2
 *     game_id:
 *      type: string
 *      description: The Id of the game the user wants to leave
 *      required: true
 *
 *   resignInput:
 *     type: object
 *     properties:
 *      user_id:
 *        type: integer
 *        description: The Id of authenticated user
 *        required: true
 *        example: 3
 *      game_id:
 *        type: string
 *        description: The id the game user wants to forfeit
 *        required: true
 *
 *   comment:
 *    type: object
 *    properties:
 *     comment:
 *      type: string
 *      example: move the queen to protect the king
 *      required: true
 *     user_id:
 *      type: string
 *      description: The user id of the spectator
 *      required: true
 *      example: 613c960542a4c7d43b4cd2ad
 *     game_id:
 *      type: string
 *      description: Game ID spectator is commenting on
 *      example: 613b72eb3ce841615903e676
 *      required: true
 *
 */

// Create A Game

/**
 * @swagger
 * /api/v1/game/create:
 *  post:
 *   summary: Create a new game when the number of games is less than 6 or restartes a completed game
 *   description: Creates a new gaming room, assigns an Id to it and sets the status to started (state = 0)
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
 * /api/v1/game/join:
 *  post:
 *   summary: join a game
 *   description: Enters a game as the scond player
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

/**
 * @swagger
 * /api/v1/game/all:
 *  get:
 *   summary: Gets all games in the database
 *   description: returns all the game objects in the database
 *   responses:
 *    200:
 *      description: A successful response
 *    500:
 *      description: An error occurred
 */
router.get("/all", GameCtrl.getAll);

/**
 * @swagger
 * /api/v1/game/watch:
 *  patch:
 *   summary: Allows a user to watch existing game play
 *   description: puts a player into a gaming room as spectator
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#/definitions/watchInput'
 *
 *   responses:
 *    200:
 *      description: A successful response
 *    500:
 *      description: An error occurred
 */
router.patch("/watch", GameCtrl.addSpectator);

/**
 * @swagger
 * /api/v1/game/piecemove:
 *  patch:
 *   summary: Sends out a piecemove
 *   description: This endpoint sends out a single piecemove so that the other player and spectators can view it
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#/definitions/pieceMoveInput'
 *
 *   responses:
 *    200:
 *      description: A successful response
 *    500:
 *      description: An error occurred
 */
router.patch("/piecemove", GameCtrl.pieceMove);

/**
 * @swagger
 * /api/v1/game/end:
 *  patch:
 *   summary: Ends a game based on win
 *   description: This endpoint is for ending a game that has a winner (not for draw)
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#/definitions/endgameInput'
 *
 *   responses:
 *    200:
 *      description: A successful response
 *    500:
 *      description: An error occurred
 */
router.patch("/end", GameCtrl.endGame);

/**
 * @swagger
 * /api/v1/game/unwatch:
 *  patch:
 *   summary: Removes a spectator from a game Room
 *   description: puts a player into a gaming room as spectator
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#/definitions/unwatchInput'
 *
 *   responses:
 *    200:
 *      description: A successful response
 *    500:
 *      description: An error occurred
 */
router.patch("/unwatch", GameCtrl.removeSpectator);

/**
 * @swagger
 * /api/v1/game/resign:
 *  patch:
 *   summary: End game by forfeiting an ongoing game
 *   description: This basically end game and choose the winner based on the user who forfeit the game against user that did not forfeit the game
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#/definitions/resignInput'
 *
 *   responses:
 *    200:
 *      description: A successful response
 *    404:
 *      description: Game is not found
 *    500:
 *      description: An error occurred
 */

router.patch("/resign", GameCtrl.resign);

/**
 * @swagger
 * /api/v1/game/{gameId}:
 *  get:
 *   summary: Queries DB to fetch a single game
 *   description: Uses the id of a created game to get its details
 *   parameters:
 *    - in: path
 *      name: gameId
 *      required: true
 *
 *   responses:
 *    200:
 *      description: A successful response
 *    404:
 *      description: Game does not exist
 *    500:
 *      description: An error occurred
 */
router.get("/:id", GameCtrl.getById);

/**
 * @swagger
 * /api/v1/game/all/:userId:
 *  get:
 *   summary: Queries DB to fetch games by user id
 *   description: Uses the id of a user to get all games a user has been involved in
 *   parameters:
 *    - in: path
 *      name: userId
 *      required: true
 *
 *   responses:
 *    200:
 *      description: A successful response
 *    404:
 *      description: user id does not exist
 *    500:
 *      description: An error occurred
 */
router.get("/all/:userId", GameCtrl.getAllByUser);

// Send comment during game
/**
 * @swagger
 * /api/v1/game/comment:
 *  patch:
 *   summary: Update game comments
 *   description: have conversations in the comment section of a game
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#/definitions/comment'
 *
 *   responses:
 *    202:
 *      description: comment sent
 *    400:
 *      description: comment cannot be empty
 *    404:
 *      description: Game not found
 *    500:
 *      description: Unable to Connect to Zuri Core DB
 */
router.patch("/comment", GameCtrl.comment);

/**
 * @swagger
 * /api/v1/game/delete/:id:
 *  delete:
 *   summary: Deletes a game with the specified Id from the database
 *   description: Deletes a game based on ID
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *
 *   responses:
 *    204:
 *      description: A successful response
 *    404:
 *      description: user id does not exist
 *    500:
 *      description: An error occurred
 */
router.delete("/delete/:id", GameCtrl.delete);

// Export Module
module.exports = router;
