const Joi = require("joi");

// Game schema
const gameSchema = Joi.object({
    game_id: Joi.string().guid({ version: "uuidv4" }).required(),
    game_owner_user_id: Joi.string().required(),
    opponent_user_id: [
        Joi.string(),
        Joi.allow(null),
    ],
    start_time: Joi.date().default(new Date().toISOString()),
    end_time: [
        Joi.date(),
        Joi.allow(null),
    ],
    moves:Joi.array(),
    result_id: [
        Joi.number(),
        Joi.allow(null),
    ]
  });
  
  module.exports = gameSchema;