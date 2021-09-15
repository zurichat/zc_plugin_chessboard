// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");
const gameSchema = require("../models/game.model");
const DatabaseConnection = require("../db/database.helper");
const centrifugoController = require("../controllers/centrifugo.controller");

const GameRepo = new DatabaseConnection("002test_game");
class GameController {
  // Create A Game
  async create(req, res) {
    try {
      // get owners details from the frontend
      const { user_id, user_name, image_url } = req.body;

      // Still in COmment because FetchByParameter doesn't work for some reason
      // Logic for more than 6 games not being active
      // const CreatedGames = await GameRepo.fetchByParameter({ status: 0 });
      // const OngoingGames = await GameRepo.fetchByParameter({ status: 1 });

      // console.log(CreatedGames);
      // console.log(OngoingGames);

      // if ((CreatedGames.data.length + OngoingGames.data.length) > 6) {
      //   return res
      //     .status(201)
      //     .send(response("More Than 6 Boards Exist Already", null, true));
      // }

      // Pass the request body to the schema
      const game = await gameSchema.validateAsync({
        owner: {
          user_id,
          user_name,
          image_url,
        },
        moves: [],
        messages: [],
        spectators: [],
        status: 0,
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
      if (!gameDBData.data[0])
        return res.status(400).send(response("Game not found", null, false));

      // if opponent already exists return bad request
      if (
        // More checks to know whether to continue game for player 1 or 2 if the tab is refreshed
        gameDBData.data[0].owner.user_id !== user_id
      ) {
        if (gameDBData.data[0].opponent) {
          if (gameDBData.data[0].opponent.user_id !== user_id) {
            return res
              .status(400)
              .send(response("opponent already exists", null, false));
          }
        }
      }

      // Logic to continue game if player 1 or 2 refreshes the tab
      if (!gameDBData.data[0].opponent) {
        const opponent = {
          user_id,
          user_name,
          image_url,
        };

        // Set opponent and save to db
        const updated = await GameRepo.update(game_id, {
          opponent,
          status: 1,
        });

        // set user permission in game
        const permission = "READ/WRITE";

        // Build Response
        const payload = {
          event: "join_game",
          permission,
          player: opponent,
        };

        // Publish the event to Centrifugo server
        await centrifugoController.publish(game_id, payload);
      }

      // Return the game
      res.status(200).send(response("Game joined successfully", game_id));
    } catch (error) {
      throw new CustomError(`Unable to Join a Game: ${error}`, 500);
    }
  }

  // Get All Games
  async getAll(req, res) {
    try {
      let gameDBData;

      // Get games that have started, Join as Spectator view
      if (req.query.ongoing == 1) {
        gameDBData = await GameRepo.fetchByParameter({
          status: 1,
        });
      } else if (req.query.noPlayer2 == 1) {
        // Get games that don't have player 2
        gameDBData = await GameRepo.fetchByParameter({
          status: 0,
        });
      } else {
        gameDBData = await GameRepo.fetchAll();
      }

      // Return all games
      res
        .status(200)
        .send(response("Games retrieved successfully", gameDBData.data));
    } catch (error) {
      throw new CustomError(`Unable to get all Games: ${error}`, 500);
    }
  }

  // Get all ongoing games for an organisation
  async getOngoingGames(req, res){
    try {
      const { organization_id } = req.params;
      const organisationGames = await GameRepo.fetchByParameter({organization_id});
      
      const ongoingGames = organisationGames.data.filter(game => {
        return game.status == 0 || game.status == 1;
      });

      res
      .status(200)
      .send(response("Ongoing organisation games retrieved successfully", ongoingGames));

    } catch(error){
      throw new CustomError(`Unable to get organisation games: ${error}`, 500);
    }
  }

  // Fetch a single game
  async getById(req, res) {
    try {
      // request an info from the user
      const game_id = req.params.id;

      // Get all games from the database
      const fetchedGame = await GameRepo.fetchByParameter({ _id: game_id });

      // if game id returns data, send response
      if (fetchedGame.data !== null) {
        res
          .status(200)
          .send(response("Game retrieved successfully", fetchedGame.data));
      } else {
        res.status(404).send(response("Games does not exist", null, false));
      }
    } catch (error) {
      throw new CustomError(`Unable to get all Games: ${error}`, 500);
    }
  }
  // Piece movement
  async pieceMove(req, res) {
    try {
      // get data from body
      const { game_id, user_id, position_fen, board_state } = req.body;

      // Find the game in the database
      const gameDBData = await GameRepo.fetchOne(game_id);

      // Check if the game exists
      if (!gameDBData.data)
        return res.status(400).send(response("Game not found", null, false));

      if (
        gameDBData.data[0].owner.user_id != user_id &&
        gameDBData.data[0].opponent.user_id != user_id
      )
        return res
          .status(400)
          .send(
            response("Only players are allowed to make moves", null, false)
          );

      // push new move into moves array
      const moves = gameDBData.data[0].moves;
      moves.push({
        user_id,
        position_fen,
        board_state,
      });

      // build payload
      const payload = {
        event: "piece_moved",
        user_id,
        position_fen,
        board_state,
      };

      // update the database
      const updated = await GameRepo.update(game_id, {
        moves,
      });

      await centrifugoController.publish(game_id, payload);
      return res.status(200).send(response("pieced moved", updated, true));
    } catch (error) {
      throw new CustomError(`Failed to move piece${error}`, 500);
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
      const spectators = gameDBData.data[0].spectators;

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
