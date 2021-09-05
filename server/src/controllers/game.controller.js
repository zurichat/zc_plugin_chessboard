// Package Modules
const uuid = require("uuid");
const gameSchema = require("../models/Game.js");
const { save, retrieve, deleteData } = require("../utils/cacheData");

// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");
const centrifugoController = require("../controllers/centrifugoController");
const DatabaseConnection = require("../db/database.helper");
const Games = new DatabaseConnection("Games");

class GameController {
  async create(req, res) {
    try {
      var game_id = uuid.v4();
      var date_ob = new Date();
      var Player1 = req.body.playerId;
      var Player2 = "playerY"
      var new_game =  {
          game_id: game_id,
          Player1: Player1,
          Player2: Player2,
          start_time: date_ob,
          end_time: null,
          moves: [
              {Player1:"//default_board_state"},
              {Player2:"//default_board_state"}
          ],
          result_id: null
      }
      
      var game = await gameSchema.validateAsync(new_game);
      const game_response = await Games.create("chess_games", game);
      game_response.gameId = game_id;

      res.status(200).send(response("New game created successfully", game_response, true));
    } catch (error) {
      throw new CustomError("Could not create new games", "500");
    }
  }


  async fetchAll(req, res) {
    try {
      const game_response = await Games.fetchAll("chess_games");
      console.log(game_response.data)
      res.status(200).send(response("Games", game_response, true, { count: game_response.length }));
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
      throw new CustomError("Could not fetch games", "500");
    }
  }


  async join(req, res) {
    try {
      const { playerId, gameId } = req.body;

      // Get to temporary storage
      const data = retrieve(gameId);
      console.log(data);
      if (!data) res.status(400).json({ message: "Game not found" });

      deleteData(gameId);

      let permission;
      if (!data.playerTwo) {
        // add player two
        save(gameId, {
          ...data,
          playerTwo: playerId,
          spectators: [],
        });
        permission = "READ/WRITE"; // for players
      } else {
        // add spectators later
        data.spectators.push({ playerId });
        save(gameId, {
          ...data,
        });
        permission = "READ"; // for spectators;
      }

      const payload = {
        event: "join_game",
        permission,
        name: playerId,
      };

      // publish event
      await centrifugoController.publish(gameId, payload);

      res.status(201).send(
        response("Plugin Information Retrieved", {
          gameId,
        })
      );
    } catch (error) {
      throw error;
    }
  }

  async move(req, res) {
    try {
      const { name, move, gameId, permission } = req.body;
      // do validations
      const game = retrieve(gameId);
      if (!game) return res.status(400).json({ message: "no such game" });

      //cache moves or save to db later

      const payload = {
        event: "piece_move",
        permission,
        name,
        move,
      };

      await centrifugoController.publish(gameId, payload);
      res.status(200).json({ message: "okay" });
    } catch (error) {
      throw error;
    }
  }
}

// Export Module
module.exports = new GameController();
