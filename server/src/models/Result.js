const Joi = require("joi");

//  a test user schema tobe updated based on requirements
const resultSchema = Joi.object({
  result_id: Joi.string().guid({ version: "uuidv4" }).required,
  game_id: Joi.string().guid({ version: "uuidv4" }).required,
  winner_id: Joi.string().guid({ version: "uuidv4" }).required,
});

module.exports = resultSchema;
