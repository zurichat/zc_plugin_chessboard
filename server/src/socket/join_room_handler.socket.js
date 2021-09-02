// Custom Modules
const formatMessage = require("./libs/formatMessage");

const join_room_handler =
  (socket) =>
  ({ user_id, game_id = 001 }) => {
    // random user
    (user_id = "Bla BLaa"),
      // Join the room with the game_id specified
      socket.join(game_id);

    // Retrieve data about the game_id from db
    // db code here

    // Check if the user_id is the game owner
    // logic here

    // If user_id != game_owner
    // if users in the game_id == 1
    // logic here

    // if users in game_id > 2
    // logic here
    socket.broadcast
      .to(game_id)
      .emit("message", formatMessage(user_id, `Spectator Joined this room`));

    // Welcome current user to the room
    socket.emit(
      "message",
      formatMessage(user_id, `welcome to room [${game_id}]`)
    );
  };

module.exports = join_room_handler;
