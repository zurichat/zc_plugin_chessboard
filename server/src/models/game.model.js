// Package Modules
const Joi = require("joi");

// Game Schema
const game_schema = Joi.object({
    // Game ID is the default id by Mongoose "_id"
    _id: Joi.string(),
    // Game Owner User ID
    game_owner_user_id: Joi.string().required(),
    // Opponent User ID
    game_opponent_user_id: Joi.string().allow(null),
    // Game Start Time
    game_start_time: Joi.date().required(),
    // Game End Time
    game_end_time: Joi.date().allow(null),
    // Game Moves
    game_moves: Joi.array().items(Joi.object({
        // Player 0 - Game Owner, Player 1 - Opponent
        player: Joi.number().required(),
        // Board State
        board_state: Joi.string().required(),
    })),
    game_result_id: Joi.string().allow(null),
});

module.exports = game_schema;