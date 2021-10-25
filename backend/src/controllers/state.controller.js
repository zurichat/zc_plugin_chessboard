const path = require('path');
const { Worker } = require('worker_threads');

class StateController {
  constructor() {
    this.games = {};
    this.workerPath = path.join(__dirname, '..', 'utils', 'gameWorker.js');
  }

  monitor(orgId, gameId) {
    const organisation = this.games[orgId];
    if (!organisation) this.games[orgId] = {};

    const worker = new Worker(this.workerPath, {
      argv: [orgId, gameId],
    });

    this.games[orgId][gameId] = worker;

    worker.on('message', (data) => {
      const params = data.split(':');
      delete this.games[params[0]][params[1]];
    });
  }

  stopMonitoring(orgId, gameId) {
    const organisation = this.games[orgId];
    if (!organisation) return;

    const gameWorker = organisation[gameId];
    if (!gameWorker) return;

    gameWorker.postMessage('stop');
    delete organisation[gameId];
  }

  static getInstance() {
    if (!this.instance) this.instance = new StateController();

    return this.instance;
  }
}

module.exports = StateController;
