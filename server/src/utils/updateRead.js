// run this in the background later

const updateRead = async (game, user_id, gameRepo) => {
  for (let move of game.moves) {
    if (!move.read.includes(user_id)) move.read.push(user_id);
  }

  for (let message of game.messages) {
    if (!message.read.includes(user_id)) message.read.push(user_id);
  }
  await gameRepo.update(game._id, {
    moves: [...game.moves],
    messages: [...game.messages],
  });
};

module.exports = updateRead;
