const { userLeave } = require("../utils/users");
const formatMessage = require("../utils/chessMessage");

const leaveRoom = 
  (socket) =>
    () => {
      const user = userLeave(socket.id);
  
        if (user) {
          socket.to(user.chessRoom)
            .emit(
              "message",
              formatMessage(
                `${user.username}`,
                `${user.username} has left the game`
              )
            );
        }
    }

module.exports = leaveRoom;