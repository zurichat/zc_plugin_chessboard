exports.matchedBoardMoves = (searchQuery, gameDBData = []) => {
  let array = gameDBData.data;
  let games;
  let matchedGames = [];
  for (i = 0; i < array.length; i++) {
    if (array[i].moves.length > 0) {
      if (array[i]?.moves[i]?.to == searchQuery) {
        matchedGames.push(array[i])
        i++;
      } else (i++)
    }
  }

  if (matchedGames.length > 0) {
    gameDBData.data = [];
    games = gameDBData.data.push(matchedGames);
  }
  console.log(games);
  const result = games ? games : [];
  return result;
}

// for (i = 0; i < array.length; i++) {
//   if (array[i].moves.length > 0) {
//     let boardMoves = array[i]?.moves[i]?.board_state;
//     for (const prop in boardMoves) {
//       if (boardMoves[prop] == searchQuery) {

//       } 
//       matchedGames.push(array[i])
//       i++;
//   }
//   } else (i++)
// }

exports.allGames = (searchQuery, data) => {
  console.log(data?.data[0]?.owner);

  let searchOwner = data?.data.filter((game) => {

    return new RegExp(String(searchQuery), 'i').test(game?.owner?.user_name);
  });

  let searchOpponent = data?.data.filter((game) => {
    return new RegExp(String(searchQuery), 'i').test(game.opponent?.user_name);
  });


  let searchMessages = data?.data.filter((game) => {
    game.messages?.includes(searchQuery);
  });
  let games = [...searchOwner, ...searchOpponent, ...searchMessages]
  return games;
}

exports.formatResult = (matchedGames) => {
  const data = matchedGames && matchedGames.length > 0 ? matchedGames.map(game => {
    return {
      title: `${game.owner?.user_name} vs ${game.opponent?.user_name}`,
      description: `${game.spectators.length} spectators`,
      content: `${game.messages}`,
      email: null,
      image_url: null,
      created_at: game.start_time,
      url: `https://chess.zuri.chat/game/:${game._id}`,
    }
  }) : [];
  return data;
}