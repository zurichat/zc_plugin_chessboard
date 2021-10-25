/* eslint-disable import/prefer-default-export */
// Import api call adapter
import { get } from '../xhr';
import { getLoggedInUserData } from '../auth';

export function getAllGames() {
  return get('/game/all', {
    user_id: getLoggedInUserData().user_id,
  });
}
