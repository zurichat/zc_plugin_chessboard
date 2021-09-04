// Package Modules
const uuid = require("uuid");
const appResponse = require("../utils/response");
const DatabaseConnectionResult = require("../db/database.result");
const Results = new DatabaseConnectionResult("Result");
const resultSchema = require("../models/Result.js");

// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");

class ResultController {
  async resultCreate(req, res) {
    try {
      const { body } = req;
      body.id = uuid.v4();
      console.log(body);

      const result = await resultSchema.validateAsync(body);
      console.log(result);
      const response = await Results.createResult(body);
      console.log(response);
      res.status(200).send(appResponse(null, response, true));
    } catch (error) {
      throw new CustomError(error, "500");
    }
  }

  async getResultById(req, res) {
    try {
    } catch (error) {}
  }

  async getAllResults(req, res) {
    try {
      const response = await Results.fetchAllResult();
      console.log(response);
      res
        .status(200)
        .send(appResponse(null, response, true, { count: response.length }));
    } catch (error) {
      throw new CustomError(error, "500");
    }
  }
}

// Export Module
module.exports = new ResultController();
