const Joi = require("joi");

//  a test user schema tobe updated based on requirements
const resultSchema = Joi.object({
  user_id: Joi.number().integer(),
  id: Joi.string().guid({ version: "uuidv4" }),
  game_id: Joi.string(),
  winner_id: Joi.string(),
  dateAdded: Joi.date().default(new Date().toISOString()),
  dateModified: Joi.date().default(new Date().toISOString()),
  lastAccessed: Joi.date().default(new Date().toISOString()),
});

module.exports = resultSchema;
