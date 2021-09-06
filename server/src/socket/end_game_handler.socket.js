// Custom Modules
const formatMessage = require("./libs/formatMessage");

const end_game_handler =
  (socket) =>
      ({ user_id, game_id }) => {
          // random chess room
          (user_id = "Bla BLaa"),
          // broadcast message to all users in the chessroom  game_id
          socket.broadcast
              .to(game_id)
              .emit(
                  "message",
                  formatMessage(user_id, `Game has ended in room ${game_id}`)
              );

          // Close socket connection
          //socket.close(game_id)

          // Welcome current user to the room
          socket.emit(
              "message",
              formatMessage(user_id, `Game Over in chess room ${game_id}`)
          );
      };

module.exports = end_game_handler;
