// Package Modules
const uuid = require("uuid");

// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");

class GameController {
    async create(req, res) {
        try {
            let game_id = uuid.v4();
            var date_ob = new Date();
            var game_owner_id = "playerX"
            var opponent_id = "playerY"
            console.log(date_ob)
            var new_game =  {
                game_id: game_id,
                game_owner_user_id: game_owner_id,
                opponent_user_id: opponent_id,
                start_time: date_ob,
                end_time: null,
                moves: [
                    {game_owner_id:"//default_bord_state"},
                    {opponent_id:"//default_board_state"}
                ],
                result_id: null
            }

            // Save the new game in DB
            // db code here

            res.status(201).send(response("New Game Created Successfully", {new_game}));
        } catch (error) {
            console.log(error);
            throw new CustomError("Could not create a new game", "500");
        }
    }
}

// Export Module
module.exports = new GameController();
