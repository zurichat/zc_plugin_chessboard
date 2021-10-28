/* eslint-disable no-underscore-dangle */
const { parentPort } = require('worker_threads');
const globalTime = require('global-time');
const DatabaseConnection = require('../db/database.helper');
const centrifugoController = require('../controllers/centrifugo.controller');
const InformationController = require('../controllers/info.controller');

const orgId = process.argv[2];
const gameId = process.argv[3];

const gameRepo = new DatabaseConnection('003test_game', orgId);

const timer = setInterval(async () => {
  const game = await gameRepo.fetchOne(gameId);
  if (!game.data) {
    clearInterval(timer);
    return;
  }

  const time = await globalTime();

  if (time - game.data.modifiedAt > 5 * 60 * 1000) {
    await gameRepo.delete(game.data._id, game.data);
    parentPort.postMessage(`${orgId}:${gameId}`);

    // collect sidebar info for game user
    const sidebarUpdatePayloadOwner = await InformationController.sideBarInfo(
      orgId,
      game.data.owner.user_id,
    );
    // publishing collected sidebar info of both owner and opponent
    await centrifugoController.publishToSideBar(
      orgId,
      game.data.owner.user_id,
      sidebarUpdatePayloadOwner,
    );

    if (game.data.opponent.user_id != null) {
      const sidebarUpdatePayloadOpponent = await InformationController.sideBarInfo(
        orgId,
        game.data.opponent.user_id,
      );
      await centrifugoController.publishToSideBar(
        orgId,
        game.data.opponent.user_id,
        sidebarUpdatePayloadOpponent,
      );
    }
  }
}, 5 * 60 * 1000);

parentPort.on('message', (data) => {
  if (data.toString() === 'stop') clearInterval(timer);
});
