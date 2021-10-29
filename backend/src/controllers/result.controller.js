/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-syntax */
/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
/* eslint-disable operator-linebreak */

// Custom Modules
const response = require('../utils/response');
const CustomError = require('../utils/custom-error');
const DatabaseConnection = require('../db/database.helper');

const GameRepo = new DatabaseConnection('001test_game');

class ResultController {
  // Get All Results
  async getAll(req, res) {
    const { data } = await GameRepo.fetchAll();

    try {
      this.resultsDBData = data.map((game) => ({
        result: game.is_owner_winner == null || game.is_owner_winner === undefined ? 'Draw' : 'Win',
        winner:
          game.is_owner_winner == null || game.is_owner_winner === undefined
            ? {}
            : game.is_owner_winner === true
              ? game.winner
              : game.opponent,
        game_id: game._id,
      }));

      res.status(200).send(response('Results retrieved successfully', this.resultsDBData));
    } catch (error) {
      throw new CustomError(`Unable to get all Results: ${error}`, 500);
    }
  }

  // Get A Result
  async getById(req, res) {
    try {
      const { gameId } = req.params;
      const { data } = await GameRepo.fetchAll();
      this.game = data.find((game) => game._id === gameId);
      if (!this.game) {
        throw new CustomError(`Result with id: ${gameId} not found`, 404);
      }
      return res.status(200).send(
        response(
          'Result retrieved successfully',
          {
            result:
              this.game.is_owner_winner == null || this.game.is_owner_winner === undefined
                ? 'Draw'
                : 'Win',
            winner:
              this.game.is_owner_winner == null || this.game.is_owner_winner === undefined
                ? {}
                : this.game.is_owner_winner === true
                  ? this.game.winner
                  : this.game.opponent,
            game_id: this.game._id,
          },
          true,
        ),
      );
    } catch (error) {
      throw new CustomError(`Unable to get Results by: ${error}`, 500);
    }
  }
}

// Export Module
module.exports = new ResultController();
