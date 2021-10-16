// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");
const { filterFromAllGames, formatResult, formatMatch } = require("../utils/search_helper");
const DatabaseConnection = require("../db/database.helper");

class SearchController {
  constructor(organisation_id) {
    this.organisation_id = organisation_id;
    this.GameRepo = new DatabaseConnection("003test_game", organisation_id);
  }
  // Search for Games
  async search(req, res) {
    try {
      let gameDBData;
      let matchedGames;
      let { q: searchQuery, filter } = req.query;
      if (searchQuery) {
        // paginate
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 3;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        //check for matching keywords. If match, return an array of ongoing games
        let regex = /^[a-h][1-8]$/;
        let keywords = ["ongoing", "games"];
        let modifiedQuery = searchQuery.trim().toLowerCase();
        if (keywords.includes(modifiedQuery) || regex.test(searchQuery.trim())) {
          // get active games
          const { data } = await this.GameRepo.fetchAll();
          const chessMatch = data.filter(game => game.status == 1);
          matchedGames = { chessMatch };
        } else {
          // fetch all games
          gameDBData = await this.GameRepo.fetchAll();
          // filter matches and group into entities
          const { userMatch, msgMatch } = filterFromAllGames(searchQuery, gameDBData);
          matchedGames = { userMatch, msgMatch };
        }
        // conform to zuri chat standard 
        let entity = formatMatch(matchedGames, req.params.member_id);
        const result = formatResult(req, res, entity, startIndex, endIndex, limit, searchQuery, filter, page);
        // just return the result
        res.status(200).json(result);
      } else {
        return res.status(400).send(response("Invalid query!", null, false));
      }
    } catch (error) {
      throw new CustomError(`Unable to search for Games: ${error}`, 500);
    }
  }

  // get search suggestions
  async searchSuggestions(req, res) {
    try {
      let response = {
        status: "ok",
        type: "suggestions",
        data: {
          "616957589ea5d3be97df29bc": "ongoing chess game", "chess bot": "chess bot", "hi, hi": "message in chess game", "anonymous": "Anonymous",
          "LocalhostUser": "spectators in-game",
          "Anonymous": "chess player 1",
          "616963d0b2cc8a9af4833d82": "chess"
        }
      }
      res.status(200).send(response);
    } catch (error) {
      throw new CustomError(`Unable to search for Suggestions: ${error}`, 500);
    }
  }
}

// export module
module.exports = SearchController;
