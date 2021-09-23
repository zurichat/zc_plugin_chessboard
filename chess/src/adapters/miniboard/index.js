// Import api call adapter
import { get, post } from "../xhr";
import { getLoggedInUserData, testPlayerTwoData } from "../auth";

export function createGame() {
  // Get the authenticated user data
  const user = getLoggedInUserData();

  // Call the Create the game Endpoint
  return post("/game/create", user);
}

export function joinGame(game_id) {
  // Get the authenticated user data
  const user = getLoggedInUserData();

  // Dummy Data For player 2 - to be removed
  // const user = testPlayerTwoData();

  // Set User Data and Game Data to Body
  let body = user;
  body["game_id"] = game_id;

  // Call the Join game Endpoint
  return post("/game/join", body);
}
