/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
// Import api call adapter
import { SubscribeToChannel } from '@zuri/utilities';
import { get, post, patch } from '../xhr';
import { getLoggedInUserData, getChessBotData } from '../auth';
// import Centrifuge from "centrifuge";

export function getGameData(game_id) {
  return get(`/game/${game_id}`, {
    user_id: getLoggedInUserData().user_id,
  });
}

export function CentrifugeSetup(game_id, ChannelEventsListener) {
  // // Setup Centrifugo Route
  // const centrifuge = new Centrifuge(
  //   "wss://realtime.zuri.chat/connection/websocket"
  //   // "ws://localhost:8000/connection/websocket"
  // );

  // // Disconnect from Centrifugo (if any)
  // centrifuge.disconnect();

  // // Subscribe to room with ID: GameId on Centrifugo Server
  // centrifuge.subscribe(game_id, (ctx) => {
  //   ChannelEventsListener(ctx);
  // });

  // // Connect to Centrifugo Server
  // centrifuge.connect();

  // // // Return Centrifugo Instance
  // // return centrifuge;

  // Switched to ZC_MAIN SINGLE RTC METHOD
  SubscribeToChannel(game_id, ChannelEventsListener);
}

// Watch Game
export function watchGame(game_id) {
  const body = {
    game_id,
    user_id: getLoggedInUserData().user_id,
    user_name: getLoggedInUserData().user_name,
    image_url: getLoggedInUserData().image_url,
  };

  return patch('/game/watch', body);
}

// unwatch Game
export function unwatchGame(game_id) {
  const body = {
    game_id,
    user_id: getLoggedInUserData().user_id,
  };

  return patch('/game/unwatch', body);
}

// End Game
export function endGame(game_id) {
  const body = {
    user_id: getLoggedInUserData().user_id,
    game_id,
  };

  return patch('/game/end', body);
}

// Start Game with Bot
export function startGameWithBot(game_id) {
  // Get the bot data
  const bot = getChessBotData();

  // Set the bot Data and Game Data to Body
  const body = bot;
  body.game_id = game_id;

  // Call the join game api endpoint with the bot data
  return post('/game/join', body);
}
