/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
// run this in the background later

const updateRead = async (game, user_id, gameRepo) => {
  for (const move of game.moves) {
    if (!move.read) move.read = [];
    if (!move.read.includes(user_id)) move.read.push(user_id);
  }

  for (const message of game.messages) {
    if (!message.read) message.read = [];
    if (!message.read.includes(user_id)) message.read.push(user_id);
  }
  await gameRepo.update(game._id, {
    moves: [...game.moves],
    messages: [...game.messages],
  });
};

module.exports = updateRead;
