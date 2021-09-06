// const { date } = require('joi');
const Joi = require("joi");

//  a test user schema tobe updated based on requirements
const gameSchema = Joi.object({
    game_id: Joi.string().guid({ version: "uuidv4" }).required,
    timeDateCreated: Joi.date().default(new Date().toISOString()),
});

module.exports = gameSchema;
