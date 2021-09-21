// Import api call adapter
import { patch } from "../xhr";
import { getLoggedInUserData } from "../auth";

export function sendComment(game_id, comment) {
  const body = {
    user_id: getLoggedInUserData().user_id,
    user_name: getLoggedInUserData().user_name,
    image_url: getLoggedInUserData().image_url,
    game_id: game_id,
    comment,
  };

  return patch("/game/comment", body);
}
