// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");
const gameSchema = require("../models/game.model");
const DatabaseConnection = require("../db/database.helper");
const centrifugoController = require("../controllers/centrifugo.controller");

const GameRepo = new DatabaseConnection("002test_game");
class GameController {
  async create(req, res) {
    try {
      // const { playerId } = req.body;
      let gameId = uuid.v4();
      // Save the new game in DB

      const response = await games.create({ gameId });
      // console.log(response.body);
      // Temporary cache store
      // const result = save(gameId, {
      //   gameId,
      //   playerOne: playerId,
      //   playerTwo: false,
      // });

      res.status(201).send(
        response("Plugin Information Retrieved", {
          gameId,
        })
      );
    } catch (error) {
      console.log(error);
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
      console.log(error);
    }
  }

  // get all game ids
  async get_game_ids(req, res) {
    try {
      const game_ids = await games.fetchAll();
      res.json(response("Game Ids Fetched Succussfully.", game_ids.data));
    } catch (e) {
      throw new CustomError("Could not retireve game ids.", "500");
    }
  }
}

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
      const index = spectators.findIndex((o) => o.user_id == user_id);

      // Check if the user is a spectator in the game
      if (index === -1)
        return res
          .status(400)
          .send(response("user not an active spectator", null, false));
      spectators.splice(index, 1);

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
  async endGame(req, res) {
    try {
      // request an info from the user
      const { game_id, user_id } = req.body;

      // fetch the game from the database
      const isGameExist = await GameRepo.fetchOne(game_id);

      // check if the game data exists
      if (!isGameExist.data) {
        return res
          .status(400)
          .send(response("Game does not exist", null, false));
      }

      // check if that particular user exist in the database
      if (!user_id) {
        return res
          .status(400)
          .send(response("User does not exist", null, false));
      }

      // checking if user (winner) is equivalent relating to the data fetched
      if (user_id === isGameExist.data.owner.user_id) {
        isGameExist.data.is_owner_winner = true;
      } else if (user_id == isGameExist.data.opponent.user_id) {
        isGameExist.data.is_owner_winner = true;
      }

      isGameExist.data.status = 2;
      // update the Game Info with current result
      const updated = await GameRepo.update(game_id, {
        ...isGameExist.data,
      });

      const payload = {
        event: "end_game",
        winner:
          isGameExist.data.owner.user_id || isGameExist.data.opponent.user_id,
        status: isGameExist.data.status,
      };

      await centrifugoController.publish(game_id, payload);
      return res.status(200).send(response("Game ended!!!", updated));
    } catch (error) {
      throw new CustomError(`Unable to end game: ${error}`, 500);
    }
  }

  // End game logic by resigning
  async resign(req, res) {
    let winner_id;
    try {
      // retrieve game id and user id from the user
      const { game_id, user_id } = req.body;

      // fetch the game from the database
      const isGameExist = await GameRepo.fetchOne(game_id);

      // check if the game data exists
      if (!isGameExist.data)
        return res
          .status(400)
          .send(response("Game does not exist", null, false));

      // checking if user resigning is owner or not
      if (user_id === isGameExist.data.owner.user_id) {
        isGameExist.data.is_owner_winner = false;
        winner_id = isGameExist.data.opponent.user_id;
      } else if (user_id === isGameExist.data.opponent.user_id) {
        isGameExist.data.is_owner_winner = true;
        winner_id = isGameExist.data.opponent.user_id;
      }

      isGameExist.data.status = 2;
      // update the Game Info with current result
      const updated = await GameRepo.update(game_id, {
        ...isGameExist.data,
      });

      const payload = {
        event: "end_game",
        winner: winner_id,
        status: isGameExist.data.status,
      };

      await centrifugoController.publish(game_id, payload);
      return res.status(200).send(response("Game ended!!!", updated));
    } catch (error) {
      throw new CustomError(`Unable to end game ${error}`, 500);
    }
  }
  // Get Game By Id
  // async getById(req, res) {
  // }

  // Get All Games By User
  async getAllByUser(req, res) {
    const { userId } = req.params;
    try {
      const { data } = await GameRepo.fetchAll();
      const userGames = data.filter((game) => {
        return (
          game.owner.user_id == userId ||
          (game.opponent && game.opponent.user_id == userId) ||
          (game.spectators?.length > 0 &&
            game.spectators.find((spec) => spec.user_id == userId))
        );
      });

      return res
        .status(200)
        .send(response("fetched user games successfully", userGames));
    } catch (error) {
      throw new CustomError(`Unable to fetch user games: ${error}`, 500);
    }
  }
}

// Export Module
module.exports = new GameController();
