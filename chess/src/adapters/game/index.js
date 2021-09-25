// Import api call adapter
import { get } from "../xhr";
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

}

// unwatch Game
export function unwatchGame(game_id) {

}