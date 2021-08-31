const { userJoin } = require("../utils/users");
const formatMessage = require("../utils/chessMessage");

const joinRoom = ({
  username = "Player 2 ",
  chessRoom = "elite chess room",
}) => {
  const user = userJoin(socket.id, username, chessRoom);
  socket.join(user.chessRoom);

  // Welcome current user to the room
  socket.emit(
    "message",
    formatMessage("admin", `You joined the ${user.chessRoom}`)
  );

  //  Broadcast when a user connects to a particular room
  socket.broadcast
    .to(user.chessRoom)
    .emit(
      "message",
      formatMessage(
        `${user.username}`,
        `${user.username} joined the game - ${user.chessRoom}`
      )
    );
};

module.exports = joinRoom;
