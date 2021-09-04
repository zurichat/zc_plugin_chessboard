// Packages/Modules
const uuid = require("uuid");
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");
const centrifugoController = require("../controllers/centrifugoController");

class GameController {
  async create(req, res) {
    try {
      let game_id = uuid.v4();

      centrifugoController.getInstance().registerHandler(game_id);

      res.status(201).send(
        response("Plugin Information Retrieved", {
          game_id,
        })
      );
    } catch (error) {
      throw new CustomError("Could not create a new game", "500");
    }
  }
}

// Export Module
module.exports = new GameController();
