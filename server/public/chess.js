const socket = io();

socket.on('message', data => {
    document.querySelector("#update").innerHTML += `${data.message} <br/>`;
});

// Socket Events
// socket.emit('join_room', {user_id, game_id});
socket.emit('join_room', {user_id: "Tester"} );