const socket = io();

socket.on('message', message => {
  console.log(message);
  outputMessage(message);
})

// Join Game Room
socket.emit('joinRoom', { username: 'Player 2', gameRoom: 'test' });


// Output message
function outputMessage(join) {
  const plyerJoined = document.querySelector("#player_join");
  plyerJoined.innerHTML += `${join.text} <br/>`;
}