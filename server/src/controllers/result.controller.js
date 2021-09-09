// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");
const DatabaseConnection = require("../db/database.helper");

const ResultRepo = new DatabaseConnection("001test_result");
class ResultController {
  // Get All Results
  async getAll(req, res) {
    req;
    try {
       const resultsDBData = await ResultRepo.fetchAll();
      res
        .status(200)
        .send(response("Results retrieved successfully", resultsDBData.data));        
    } catch(error){
      throw new CustomError(`Unable to get all Results: ${error}`, 500);
    }
  }
  // Get A Result
  // async getById(req, res) {
  // }
}

// Export Module
module.exports = new ResultController();
