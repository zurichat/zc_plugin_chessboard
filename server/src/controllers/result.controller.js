// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");
const resultSchema = require("../models/result.model");
const DatabaseConnection = require("../db/database.helper");

const ResultRepo = new DatabaseConnection("001test_result");
class ResultController {
  // Create A Result
  async create(req, res) {
    try {
      // Pass the request body to the schema
      const result = await resultSchema.validateAsync(req.body);

      // Save the result to the database
      const resultDBData = await ResultRepo.create(result);

      // Return the result
      res
        .status(200)
        .send(response("Result created successfully", resultDBData.data));
    } catch (error) {
      throw new CustomError(`Unable to create a Result: ${error}`, "500");
    }
  }

  // Get All Results
  // async getAll(req, res) {
  // }

  // Get A Result
  // async getById(req, res) {
  // }
}

// Export Module
module.exports = new ResultController();
