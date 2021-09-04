const uuid = require("uuid");
const resultSchema = require("../models/Result.js");
const appResponse = require("../utils/response");
const DatabaseConnection = require("../db/database.helper");
const Users = new DatabaseConnection("User");
const CustomError = require("../utils/custom-error");

class ResultController {
  async createGameResult() {
    try {
      const { body } = req;
      body.id = uuid.v4();
      console.log(body);
      const result = await resultSchema.validateAsync(body);
      const response = await Users.create(result);
      res.status(200).send(appResponse(null, response, true));
    } catch (error) {
      throw new CustomError("Could not create user", "500");
    }
  }
}

module.exports = new ResultController();
