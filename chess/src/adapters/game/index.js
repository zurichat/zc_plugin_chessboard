// Import api call adapter
import { get, patch } from "../xhr";
import { getLoggedInUserData } from "../auth";
import Centrifuge from "centrifuge";

export function getGameData(game_id) {
  return get(`/game/${game_id}`);
}

export function CentrifugeSetup(game_id, ChannelEventsListener) {
  // Setup Centrifugo Route
  const centrifuge = new Centrifuge(
    "wss://realtime.zuri.chat/connection/websocket"
    // "ws://localhost:8000/connection/websocket"
  );

  // Disconnect from Centrifugo (if any)
  centrifuge.disconnect();

  // Subscribe to room with ID: GameId on Centrifugo Server
  centrifuge.subscribe(game_id, (ctx) => {
    ChannelEventsListener(ctx);
  });

  // Connect to Centrifugo Server
  centrifuge.connect();

  // // Return Centrifugo Instance
  // return centrifuge;
}

// Watch Game
export function watchGame(game_id) {
  const body = {
    game_id,
    user_id: getLoggedInUserData().user_id,
    user_name: getLoggedInUserData().user_name,
    image_url: getLoggedInUserData().image_url,
  };

  return patch("/game/watch", body);
}

// unwatch Game
export function unwatchGame(game_id) {
  const body = {
    game_id,
    user_id: getLoggedInUserData().user_id,
  };

  return patch("/game/unwatch", body);
}
