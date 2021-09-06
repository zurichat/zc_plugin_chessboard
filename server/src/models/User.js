const Joi = require("joi");

//  a test user schema tobe updated based on requirements
const userSchema = Joi.object({
    id: Joi.string().guid({ version: "uuidv4" }).required(),
    userName: Joi.string().required(),
    organization: [
        Joi.string().guid({ version: "uuidv4" }).required(),
        Joi.allow(null),
    ],
    wins: Joi.number().required(),
    dateAdded: Joi.date().default(new Date().toISOString()),
    dateModified: Joi.date().default(new Date().toISOString()),
    lastAccessed: Joi.date().default(new Date().toISOString()),
});

module.exports = userSchema;
