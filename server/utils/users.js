// dummy user - connect to db later
const users = [];

// Join user to chess
const userJoin = (id, username, chessRoom) => {
  const user = {id, username, chessRoom}
  users.push(user);
  return user;
}

module.exports = {
  userJoin
}