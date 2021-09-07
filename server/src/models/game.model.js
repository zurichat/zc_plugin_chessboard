// Package Modules
const Joi = require("joi");

// Game Schema
const game_schema = Joi.object({
  // Game Owner
  owner: Joi.object({
    user_Id: Joi.string().required(),
    user_name: Joi.string().required(),
    image_url: Joi.string(),
  }).required(),

  // Opposing player
  opponent: Joi.object({
    user_Id: Joi.string().required(),
    user_name: Joi.string().required(),
    image_url: Joi.string(),
  }).default(null),

  //Play time
  start_time: Joi.date().default(Date.now),
  end_time: Joi.date().allow(null),

  //result param
  is_owner_winner: Joi.boolean().default(false),

  // Game Moves
  moves: Joi.array().items(
    Joi.object({
      player_id: Joi.string().required(),
      position_fen: Joi.string().required(),
      board_state: Joi.string().required(),
    })
  ),

  // messages
  messages: Joi.array().items(
    Joi.object({
      user_name: Joi.string().required(),
      text: Joi.string().required(),
      image_url: Joi.string(),
    })
  ),

  // game spectators
  spectators: Joi.array().items(
    Joi.object({
      user_Id: Joi.string().required(),
      user_name: Joi.string().required(),
      image_url: Joi.string(),
    })
  ),
});

module.exports = game_schema;
