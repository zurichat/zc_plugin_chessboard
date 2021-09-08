// Custom Modules
const response = require("../utils/response");
const gameSchema = require("../models/game.model");
const DatabaseConnection = require("../db/database.helper");
const centrifugoController = require("../controllers/centrifugo.controller");

const GameRepo = new DatabaseConnection("001test_game");
class GameController {
  // Create A Game
  async create(req, res, next) {
    try {
      // get owners details from the frontend
      const { user_id, user_name, image_url } = req.body;

      // Pass the request body to the schema
      const game = await gameSchema.validateAsync({
        owner: {
          user_id,
          user_name,
          image_url,
        },
      });

      // Save the game to the database
      const gameDBData = await GameRepo.create(game);

      // Return the game
      res
        .status(201)
        .send(response("Game created successfully", gameDBData.data, true));
    } catch (error) {
      next(`Unable to create a Game: ${error}`);
    }
  }

  // Join A Game
  async join(req, res, next) {
    try {
      // Get the game id and user id from the request body
      const { game_id, user_id, user_name, image_url } = req.body;

      // Find the game in the database
      const gameDBData = await GameRepo.fetchOne(game_id);

      // Check if the game exists
      if (!gameDBData.data)
        return res.status(400).send(response("Game not found", null, false));

      // Variable to store user permission in game
      let permission;

      // if opponent already exists return bad request
      if (gameDBData.data.opponent)
        return res
          .status(400)
          .send(response("opponent already exists", null, false));

      // Set opponent and save to db
      const updated = await GameRepo.update(game_id, {
        ...gameDBData.data,
        opponent: {
          user_id,
          user_name,
          image_url,
        },
      });

      permission = "READ/WRITE";

      // Build Response
      const payload = {
        event: "join_game",
        permission,
        player: updated.data.opponent,
      };

      // Publish the event to Centrifugo server
      await centrifugoController.publish(game_id, payload);

      // Return the game
      res
        .status(200)
        .send(response("Game joined successfully", gameDBData.data));
    } catch (error) {
      next(`Unable to Join a Game: ${error}`);
    }
  }

  // Get All Games
  async getAll(req, res, next) {
    req;
    try {
      // Get all games from the database
      const gameDBData = await GameRepo.fetchAll();

      // Return all games
      res
        .status(200)
        .send(response("Games retrieved successfully", gameDBData.data));
    } catch (error) {
      next(`Unable to get all Games: ${error}`);
    }
  }

  // Piece movement
  async pieceMove(req, res, next) {
    try {
      // get data from body
      const { game_id, player_id, position_fen, board_state } = req.body;

      // Find the game in the database
      const { data } = await GameRepo.fetchOne(game_id);

      // Check if the game exists
      if (!data)
        return res.status(400).send(response("Game not found", null, false));

      if (data.owner.user_id != player_id && data.opponent.user_id != player_id)
        return res
          .status(400)
          .send(
            response("Only players are allowed to make moves", null, false)
          );

      const payload = {
        player_id,
        position_fen,
        board_state,
      };

      // push new move into moves array
      data.moves.push(payload);

      // update the database
      await GameRepo.update(game_id, data);
      await centrifugoController.publish(game_id, payload);
      return res.status(204);
    } catch (error) {
      next(error);
    }
  }

  // Add spectator to game
  // async addSpectator(req, res) {
  // }

  // End game logic by checkmate or draw
  // async endGame (req, res){
  // }

  // End game logic by resigning
  //async resign (req, res){}

  // Get Game By Id
  // async getById(req, res) {
  // }

  // Get All Games By User
  // async getAllByUser(req, res) {
  // }
}

// Export Module
module.exports = new GameController();
