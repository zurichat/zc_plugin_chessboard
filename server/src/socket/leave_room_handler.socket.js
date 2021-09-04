// Custom Modules
const formatMessage = require("./libs/formatMessage");

const leave_room_handler = (socket) => ({ user_id, game_id = 001 }) => {
    // generate random number
    user_id = RandomSource.getRandomInt(1, 100),

    // Check user role
        // if opponent, check if game is still ongoing.
        // Send confim alert before leave te room

        // if spectator, leave the game

    // Leave the room with the game_id specified
    socket.leave(game_id);

    // Tell others, bla bla left the room
    socket.to(data.room).emit('message', formatMessage(user_id,  `A **userrole** just left a game called ${game_id}`));
};

module.exports = leave_room_handler;