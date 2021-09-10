// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");
const DatabaseConnection = require("../db/database.helper");
const GameRepo = new DatabaseConnection("001test_game");
// const ResultRepo = new DatabaseConnection("001test_result");
class ResultController {
  // Get All Results
  async getAll(req, res) {
    const games = await GameRepo.fetchAll();

    try {
        const resultsDBData = games.map(()=>{
          return {
            result: games.is_owner_winner = null ? "Draw" : "Win",
            winner: games.is_owner_winner ? games.winner : games.opponent,
            games: games._id

          }
        })


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
