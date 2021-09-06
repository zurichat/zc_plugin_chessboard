// Package Modules
const Joi = require("joi");

// Result Schema
const result_schema = Joi.object({
    // Result ID is the default id by Mongoose "_id"
    // _id: Joi.string(),
    // Game ID
    game_id: Joi.string().required(),
    // Winner User ID
    winner_user_id: Joi.string().allow(null),
});

module.exports = result_schema;