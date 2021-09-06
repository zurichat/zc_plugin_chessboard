const uuid = require("uuid");
const resultSchema = require("../models/Result.js");
const appResponse = require("../utils/response");
const DatabaseConnection = require("../db/database.helper");
const Users = new DatabaseConnection("User");
const CustomError = require("../utils/custom-error");
const Result = new DatabaseConnection("Result");
const Game = new DatabaseConnection("Game");

class ResultController {
    async createGameResult(req, res) {
        try {
            const { body } = req;
            body.id = uuid.v4();
            console.log(body);
            const result = await resultSchema.validateAsync(body);
            const response = await Users.create(result);
            res.status(200).send(appResponse(null, response, true));
        } catch (error) {
            throw new CustomError("Could not create user", "500");
        }
    }
    async updateGameResult(req, res) {
        try {
            const { body } = req;
            const { error } = await resultSchema.validateAsync(body);
            if (error) {
                throw new Error(error);
            }
            const response = await Result.create(body);
            const gameID = body.game_id;
            console.log("game ID: ", gameID);
            const game = await Game.update(body.game_id, {
                result_id: response.object_id,
            });
            console.log("game: ", game);
            res.status(200).send(appResponse(null, game, true));
        } catch (error) {
            console.log("error: ", error);
            // throw new CustomError("Could not update game with result", "500");
        }
    }
}

module.exports = new ResultController();
