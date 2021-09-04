// Custom Modules

<<<<<<< HEAD
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
=======
const leave_room_handler = (data) => {
  console.log(data);
  //Perform all server side logic for player leaving room
>>>>>>> be71c77ab8ad17a538d513616fe38a58d96929cb
};

module.exports = leave_room_handler;