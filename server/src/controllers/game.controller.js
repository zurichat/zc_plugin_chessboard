// Package Modules
const uuid = require("uuid");
const { save, retrieve, deleteData } = require("../utils/cacheData");
const DatabaseConnection = require("../db/database.helper");
const Game = new DatabaseConnection("Game")
const ObjectId = require('mongodb').ObjectId

// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");
const centrifugoController = require("../controllers/centrifugoController");

class GameController {
  create(req, res) {
    try {
      const { playerId } = req.body;
      let gameId = uuid.v4();
      // Save the new game in DB
      // Temporary cache store
      const result = save(gameId, {
        gameId,
        playerOne: playerId,
        playerTwo: false,
      });

      res.status(201).send(
        response("Plugin Information Retrieved", {
          gameId,
        })
      );
    } catch (error) {
      throw new CustomError("Could not create a new game", "500");
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
      const { name, move, gameId, permission, player_id, board_state } = req.body;
      // do validations
      const game = retrieve(gameId);
      if (!game) return res.status(400).json({ message: "no such game" });

      //cache moves or save to db later

      //No one has created a function to add game to db
      //Here i use a dummy data i added via postman
      await saveMoveToDb({player_id: 1, board_state: 4, gameId: 11})
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

const saveMoveToDb = async ({player_id, board_state, gameId}) => {
    try{
      const move = {player_id, board_state}
  
      // The update method currently provided by zuri core does not allow for direct addition into moves array
      // So fetch the game, modify the moves then update the entire game
      const game = await Game.fetchByGameId(gameId)
      
      const gamePayload = game.data[0]
      const moves = [...gamePayload.moves, move]
      const newGamePayLoad = {game_id: gamePayload.game_id, moves}
      
      const object_id = gamePayload._id
      await Game.update(object_id, newGamePayLoad)
      
    } catch(e){
  
    }
  }

// Export Module
module.exports = new GameController();
