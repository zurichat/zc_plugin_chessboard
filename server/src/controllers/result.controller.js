// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");
const DatabaseConnection = require("../db/database.helper");
const GameRepo = new DatabaseConnection("001test_game");

class ResultController {
  // Get All Results
  async getAll(req, res) {
    const { data } = await GameRepo.fetchAll();

    try {
      let resultsDBData = data.map((game) => {
        return {
          // eslint-disable-next-line no-constant-condition
          result: (game.is_owner_winner =
            null || game.is_owner_winner == undefined ? "Draw" : "Win"),
          winner:
            game.is_owner_winner == null
              ? {}
              : game.is_owner_winner == true
              ? game.winner
              : game.opponent,
          game_id: game._id,
        };
      });

      res
        .status(200)
        .send(response("Results retrieved successfully", resultsDBData));
    } catch (error) {
      throw new CustomError(`Unable to get all Results: ${error}`, 500);
    }
  }

  // Get A Result
  async getById(req, res) {
    const { gameId } = req.params;
    const { data } = await GameRepo.fetchAll();
    try {
      let result = data.find((game) => game._id == gameId);
      if (!result) {
        throw new CustomError(`Result with id: ${gameId} not found`, 404);
      }
      res.status(200).send(response("Result retrieved successfully", result));
    } catch (error) {
      throw new CustomError(`Unable to get Results by: ${error}`, 500);
    }
  }
}

// Export Module
module.exports = new ResultController();
