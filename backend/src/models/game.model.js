/* eslint-disable camelcase */
// Package Modules
const Joi = require('joi');

// Game Schema
const game_schema = Joi.object({
  // Game Owner
  owner: Joi.object({
    user_id: Joi.string().required(),
    user_name: Joi.string().required(),
    image_url: Joi.string(),
    color: Joi.string().default('w'),
  }).required(),

  // Opposing player
  opponent: Joi.object({
    user_id: Joi.string().required(),
    user_name: Joi.string().required(),
    image_url: Joi.string(),
    color: Joi.string().default('b'),
  })
    .default(null)
    .allow(null),

  // Play time
  start_time: Joi.date().default(Date.now).allow(null),
  end_time: Joi.date().allow(null),

  // game status
  status: Joi.number().required(), // created = 0, running = 1, completed = 2
  // result param
  is_owner_winner: Joi.boolean().default(false).allow(null),

  // Game Moves
  moves: Joi.array()
    .items(
      Joi.object({
        user_id: Joi.string().required(),
        position_fen: Joi.string().required(),
        board_state: Joi.string().required(),
        read: Joi.array().default([]).items(Joi.string()),
      }),
    )
    .allow(null),

  // captured pieces
  captured_pieces: Joi.array().items(Joi.string()),

  // messages
  messages: Joi.array()
    .items(
      Joi.object({
        user_name: Joi.string().required(),
        text: Joi.string().required(),
        image_url: Joi.string(),
        read: Joi.array().items(Joi.string()),
      }),
    )
    .allow(null),

  // game spectators
  spectators: Joi.array()
    .items(
      Joi.object({
        user_id: Joi.string().required(),
        user_name: Joi.string().required(),
        image_url: Joi.string(),
      }),
    )
    .allow(null),

  starredBy: Joi.array().default([]).items(Joi.string()),

  like_count: Joi.number().default(0).allow(null),
  modifiedAt: Joi.number().default(0).allow(null),
});

module.exports = game_schema;
