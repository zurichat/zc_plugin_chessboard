// dummy user - connect to db later
const users = [];

// Join user to chess
const userJoin = (id, username, chessRoom) => {
  const user = { id, username, chessRoom }
  users.push(user);
  return user;
}

const userLeave = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
}

module.exports = {
  userJoin,
  userLeave
}