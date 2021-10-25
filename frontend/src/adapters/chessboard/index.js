// Import api call adapter
import { patch } from "../xhr";
import { getChessBotData, getLoggedInUserData } from "../auth";

export function UpdatePieceMove(game_id, move, board_fen_state) {
  const body = {
    user_id: getLoggedInUserData().user_id,
    game_id: game_id,
    board_state: move,
    position_fen: board_fen_state,
  };

  return patch("/game/piecemove", body);
}

export function UpdateBotPieceMove(game_id, move, board_fen_state) {
  const body = {
    user_id: getChessBotData().user_id,
    game_id: game_id,
    board_state: move,
    position_fen: board_fen_state,
  };

  return patch("/game/piecemove", body);
}

export function UpdateGameWinner(game_id, user_id) {
  const body = {
    user_id: user_id,
    game_id: game_id,
  };

  return patch("/game/end", body);
}
