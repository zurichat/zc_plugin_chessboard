// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");
const gameSchema = require("../models/game.model");
const DatabaseConnection = require("../db/database.helper");
const centrifugoController = require("../controllers/centrifugo.controller");

const GameRepo = new DatabaseConnection("001test_game");
class GameController {
  // Create A Game
  async create(req, res) {
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
      throw new CustomError(`Unable to create a Game: ${error}`, 500);
    }
  }

  // Join A Game
  async join(req, res) {
    try {
      // Get the game id and user id from the request body
      const { game_id, user_id, user_name, image_url } = req.body;

      // Find the game in the database
      const gameDBData = await GameRepo.fetchOne(game_id);

      // Check if the game exists
      if (!gameDBData.data)
        return res.status(400).send(response("Game not found", null, false));

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

      // set user permission in game
      const permission = "READ/WRITE";

      // Build Response
      const payload = {
        event: "join_game",
        permission,
        player: updated.data.opponent,
      };

      // Publish the event to Centrifugo server
      await centrifugoController.publish(game_id, payload);

      // Return the game
      res.status(200).send(response("Game joined successfully", updated));
    } catch (error) {
      throw new CustomError(`Unable to Join a Game: ${error}`, 500);
    }
  }

  // Get All Games
  async getAll(req, res) {
    req;
    try {
      // Get all games from the database
      const gameDBData = await GameRepo.fetchAll();

      // Return all games
      res
        .status(200)
        .send(response("Games retrieved successfully", gameDBData.data));
    } catch (error) {
      throw new CustomError(`Unable to get all Games: ${error}`, 500);
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

      // push new move into moves array
      const moves = data.moves;
      moves.push({
        player_id,
        position_fen,
        board_state,
      });

      // build payload
      const payload = {
        event: "piece_moved",
        player_id,
        position_fen,
        board_state,
      };

      // update the database
      const updated = await GameRepo.update(game_id, {
        ...data,
        moves,
      });
      await centrifugoController.publish(game_id, payload);
      return res.status(200).send(response("pieced moved", updated, true));
    } catch (error) {
      next(error);
    }
  }

  // Add spectator to game
  async addSpectator(req, res) {
    try {
      // Get the game id and user id from the request body
      const { game_id, user_id, user_name, image_url } = req.body;

      // Find the game in the database
      const gameDBData = await GameRepo.fetchOne(game_id);
      // Check if the game exists
      if (!gameDBData.data)
        return res.status(400).send(response("Game not found", null, false));

      // Get specatators in the game
      const spectators = gameDBData.data[0].spectators || [];
      

      // Build the new spectator object
      const spectator = {
        user_id,
        user_name,
        image_url,
      };

      // Add new spectator and return the number of spectators
      const new_number_of_specators = spectators.push(spectator);

      // Save spectators back to db
      const updated = await GameRepo.update(game_id, {
        ...gameDBData.data,
        spectators,
      });

      // set user permission in the game
      const permission = "READ";

      // Build Response
      const payload = {
        event: "spectator_joined_game",
        permission,
        spectator,
        new_number_of_specators,
      };

      // Publish the event to Centrifugo server
      await centrifugoController.publish(game_id, payload);

      // Return the game
      res.status(200).send(response("Joined as spectator successful", updated));
    } catch (error) {
      throw new CustomError(`Unable to add spectator: ${error}`, 500);
    }
  }

  // Unwatch game (remove spectator)
  async removeSpectator(req, res) {
    try {
      // Get the game id and user id from the request body
    const { game_id, user_id } = req.body;

    // Find the game in the database
    const gameDBData = await GameRepo.fetchOne(game_id);

    // Check if the game exists
    if (!gameDBData.data)
    return res.status(400).send(response("Game not found", null, false));

    // Get specatators in the game
    const spectators = gameDBData.data[0].spectators;

    // find index of user
    const index = spectators.findIndex(o => o.user_id == "user_id");
    console.log("index: ", index);

     // Check if the user is a spectator in the game
    if (index === -1)
    return res.status(400).send(response("user not an active spectator", null, false));
    spectators.splice(index,1);

    // Save spectators back to db
    const updated = await GameRepo.update(game_id, {
      ...gameDBData.data,
      spectators,
    });

    // Return the game
    res.status(200).send(response("spectator removed successfully", updated));


    } catch (error) {
      throw new CustomError(`Unable to unwatch game: ${error}`, 500);
    }    
  }
  

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
