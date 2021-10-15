exports.allGames = (searchQuery, data) => {
  let searchOwner = data?.data.filter((game) => {
    return new RegExp(String(searchQuery), "i").test(game?.owner?.user_name);
  });

  let searchOpponent = data?.data.filter((game) => {
    return new RegExp(String(searchQuery), "i").test(game.opponent?.user_name);
  });

  let searchMessages = data?.data.filter((game) => {
    game.messages?.includes(searchQuery);
  });
  let games = [...searchOwner, ...searchOpponent, ...searchMessages];
  return games;
};

exports.formatData = (matchedGames) => {
  const data =
    matchedGames && matchedGames.length > 0
      ? matchedGames.map((game) => {
          return {
            title: `${game.owner?.user_name} vs ${game.opponent?.user_name}`,
            description: `${game.spectators.length} spectators`,
            content: `${game.messages}`,
            email: null,
            image_url: null,
            created_at: game.start_time,
            url: `https://chess.zuri.chat/game/:${game._id}`,
          };
        })
      : [];
  return data;
};

exports.formatResult = (
  req,
  res,
  data = [],
  startIndex,
  endIndex,
  limit,
  searchQuery = " ",
  filter = " ",
  page
) => {
  let result = {};
  let page_count = Math.ceil(data?.length / limit);
  let total_count = data?.length;
  let first_page = 1;
  let last_page = page_count;
  data = data?.slice(startIndex, endIndex);
  let per_page = data?.length;
  if (!total_count) {
    first_page = 0;
    last_page = 0;
    per_page = 0;
  }
  let current_page = Math.ceil(data?.length / limit);
  // ensure current page isn't out of range
  if (current_page < 1 && current_page !== 0) {
    current_page = 1;
  } else if (current_page > page_count) {
    current_page = page_count;
  }

  const next =
    endIndex < data.length
      ? `https://chess.zuri.chat/api/v1/search/${req.params.org_id}/${
          req.params.member_id
        }?key=${searchQuery}&member_id=${req.query.member_id}&org_id=${
          this.organisation_id
        }&page=${page + 1}`
      : " ";

  let filter_suggestions = {
    in: [],
    from: [],
  };

  result = {
    status: "ok",
    pagination: {
      page_count,
      per_page,
      total_count,
      current_page,
      first_page,
      last_page,
      next,
    },
    query: searchQuery,
    plugin: "Chess",
    filter: filter,
    data,
    filter_suggestions,
  };
  return result;
};
