// Package Modules
const uuid = require('uuid');

// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");

class GameController {
    async create(req, res) {
        try {

            let game_id = uuid.v4();
            let game_options = {
                game_owner_user_id: uuid.v4(),
                player_color: 'b',
            }

            // Save the new game in DB
            // db code here

            res.status(201).send(response("Plugin Information Retrieved", {
                game_id, game_options
            }));
        } catch (error) {
            throw new CustomError("Could not create a new game", "500");
        }
    }
}

// Export Module
module.exports = new GameController();