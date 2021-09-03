const piece_moved_handler =
  (socket) =>
  ({ move, playerId, gameId }) => {
    // send move to others
    socket.broadcast
      .to(gameId)
      .emit("message", { message: `${playerId}: ${move}` });

    // cache game move after broadcasting
  };

module.exports = piece_moved_handler;
