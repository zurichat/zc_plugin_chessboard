// Package Modules
const uuid = require("uuid");
const axios = require('axios')

// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");
const DatabaseConnection = require("../db/database.helper");
const Game = new DatabaseConnection("Game")


class GameController {
  async create(req, res) {
    try {
      let game_id = uuid.v4();
      let game_options = {
        game_owner_user_id: uuid.v4(),
        player_color: "b",
      };

      // Save the new game in DB
      // db code here

      res.status(201).send(
        response("Plugin Information Retrieved", {
          game_id,
          game_options,
        })
      );
    } catch (error) {
      throw new CustomError("Could not create a new game", "500");
    }
  }

  async saveMove(req, res){
    try {

      const playerId = 1
      const pieceId = 2
      const initialPosition = 23
      const finalPosition = 22
      const gameId = 11
      const { plugin_id, organization_id, collection_name } = Game.data

      const payload = {playerId, pieceId, initialPosition, finalPosition, gameId}
      const body = {payload, plugin_id, organization_id, collection_name}

      const response = await axios.post('https://zccore.herokuapp.com/data/write', body) 
      res.json({'message': 'success', data: response.data.data})

    } catch (error) {
      console.log(error)
      throw new CustomError("failed to save move")
    }

  }
}

// Export Module
module.exports = new GameController();
