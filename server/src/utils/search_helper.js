exports.filterFromAllGames = (searchQuery, data) => {
  let userMatch = data?.data.filter((game) => {
    return new RegExp(String(searchQuery), "i").test(game?.owner?.user_name);
  });

  let opponentMatch = data?.data.filter((game) => {
    return new RegExp(String(searchQuery), "i").test(game.opponent?.user_name);
  });
  if (opponentMatch) {
    userMatch = [...userMatch, ...opponentMatch];
  }

  let msgMatch = data?.data.filter((game) => {
    game.messages?.includes(searchQuery);
  });

  let games = { userMatch, msgMatch };
  return games;
};

// map matched games according to their respective standard formats
exports.formatMatch = (matchedGames, member_id) => {
  const { chessMatch, userMatch, msgMatch } = matchedGames;
  const userFormat = (userEn) => {
    return {
      _id: `${member_id}`,
      username: userEn.owner?.user_name,
      email: null,
      images_url: `${userEn.owner?.image_url}`,
      created_at: userEn.start_time,
      destination_url: `/game/${userEn._id}`,
    };
  };
  const msgFormat = (msgEn) => {
    return {
      _id: `${msgEn._id}`,
      room_name: null,
      content: `${msgEn.messages}`,
      created_by: msgEn.user_name,
      images_url: msgEn.image_url,
      created_at: msgEn.timestamp,
      destination_url: `/game/${msgEn._id}`,
    };
  };
  const otherFormat = (otherEn) => {
    let state;
    if (otherEn.status == 1) {
      state = "ongoing";
    } else if (otherEn.status == 2) {
      state = "completed";
    }
    return {
      _id: `${otherEn._id}`,
      title: `${otherEn.owner?.user_name} vs ${otherEn.opponent?.user_name}`,
      content: `${state} game with ${otherEn.spectators?.length} spectator(s)`,
      created_by: otherEn.owner?.user_name,
      images_url: otherEn.owner?.image_url,
      created_at: otherEn.start_time,
      destination_url: `/game/${otherEn._id}`,
    };
  };

  const chessGame =
    chessMatch?.length > 0
      ? chessMatch.map((otherEn) => otherFormat(otherEn))
      : [];
  const user =
    userMatch?.length > 0 ? userMatch.map((userEn) => userFormat(userEn)) : [];
  const message =
    msgMatch?.length > 0 ? msgMatch.map((msgEn) => msgFormat(msgEn)) : [];
  return { chessGame, user, message };
};

exports.formatResult = (
  req,
  res,
  entity = {},
  startIndex,
  endIndex,
  limit,
  searchQuery = " ",
  filter = [],
  page
) => {
  let data;
  if (entity.user?.length > 0) {
    data = entity.user;
    entity = "user";
  } else if (entity.message?.length > 0) {
    data = entity.message;
    entity = "message";
  } else if (entity.chessGame?.length > 0) {
    data = entity.chessGame;
    entity = "chess";
  }
  let result = {};
  let page_size = Math.ceil(data?.length / limit);
  let total_results = data?.length;
  let first_page = 1;
  let last_page = page_size;

  const previous =
    page - 1 > 0
      ? `https://chess.zuri.chat/api/v1/search/${req.params.org_id}/${
          req.params.member_id
        }?q=${searchQuery}&page=${page - 1}`
      : " ";

  const next =
    endIndex < data?.length
      ? `https://chess.zuri.chat/api/v1/search/${req.params.org_id}/${
          req.params.member_id
        }?q=${searchQuery}&page=${page + 1}`
      : " ";

  data = data?.slice(startIndex, endIndex);

  if (!total_results) {
    first_page = 0;
    last_page = 0;
  }
  let current_page = Math.ceil(data?.length / limit);
  // ensure current page isn't out of range
  if (current_page < 1 && current_page !== 0) {
    current_page = 1;
  } else if (current_page > page_size) {
    current_page = page_size;
  }

  result = {
    status: "ok",
    title: `${searchQuery} in Chess`,
    description: `search for ${searchQuery} in Chess`,
    pagination: {
      total_results,
      page_size,
      current_page,
      first_page,
      last_page,
      previous,
      next,
    },
    search_parameters: {
      query: searchQuery,
      filters: filter,
      plugin: "Chess",
    },
    results: {
      entity,
      data,
    },
  };
  return result;
};
