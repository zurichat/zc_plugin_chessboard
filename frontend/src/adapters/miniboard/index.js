/* eslint-disable camelcase */
// Import api call adapter
import { post } from '../xhr';
import { getLoggedInUserData } from '../auth';

export function createGame() {
  // Get the authenticated user data
  const user = getLoggedInUserData();

  // Call the Create the game Endpoint
  return post('/game/create', user);
}

export function joinGame(game_id) {
  // Get the authenticated user data
  const user = getLoggedInUserData();

  // Set User Data and Game Data to Body
  const body = user;
  body.game_id = game_id;

  // Call the Join game Endpoint
  return post('/game/join', body);
}
