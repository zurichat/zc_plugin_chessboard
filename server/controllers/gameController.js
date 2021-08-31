// Import UUID
const { uuid } = require('uuidv4');

class gameController {

  static HandleGameCreation(req, res, next) {
    const gameId = uuid();
    const gameOption = {
      playerType: 'black',
      difficulty: 'medium'
    };
    res.status(201).json({
      gameId,
      gameOption,
    })
  }

}

module.exports = gameController;
