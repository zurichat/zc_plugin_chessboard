// Custom Modules
const formatMessage = require("./libs/formatMessage");

const end_game_handler = (socket) => ({ game_id}) => {

    // random chess room
    game_id = "Bla BLaa 001",
    
    // broadcast message to all users in the chessroom  game_id
    socket.broadcast.to(game_id).emit("message", formatMessage(`Game has ended in room ${game_id}`));

    // Close socket connection
    socket.close(game_id)
};

module.exports = end_game_handler;