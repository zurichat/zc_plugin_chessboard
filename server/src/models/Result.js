const Joi = require("joi");

//  a test user schema tobe updated based on requirements
const resultSchema = Joi.object({
    result_id: Joi.string().guid({ version: "uuidv4" }),
    game_id: Joi.string().required(),
    winner_id: Joi.string().required(),
});

module.exports = resultSchema;
