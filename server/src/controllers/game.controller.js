// Package Modules
const uuid = require("uuid");
const { save, retrieve, deleteData } = require("../utils/cacheData");

// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");
const centrifugoController = require("../controllers/centrifugoController");
const databaseConnection = require("../db/database.helper");
const games = new databaseConnection("Game");

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

// const saveMoveToDb = async ({ player_id, board_state, gameId }) => {
//     try {
//         const move = { player_id, board_state }; // The update method currently provided by zuri core does not allow for direct addition into moves array // So fetch the game, modify the moves then update the entire game

//         const game = await Game.fetchByGameId(gameId);
//         const gamePayload = game.data[0];
//         const moves = [...gamePayload.moves, move];
//         const newGamePayLoad = { game_id: gamePayload.game_id, moves };
//         const object_id = gamePayload._id;
//         await Game.update(object_id, newGamePayLoad);
//     } catch (e) {}
// };

// Export Module
module.exports = new GameController();
