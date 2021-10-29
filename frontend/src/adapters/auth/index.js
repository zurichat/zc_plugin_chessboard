/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
// Import api call adapter
import botImage from '../../assets/bot/bot-image.svg';
import defaultProfileImage from '../../assets/profile-image/default-profile-picture-avatar-png-green.png';
import { UserService } from '../userService';

const profileImage = defaultProfileImage;

export function getLoggedInUserData() {
  // Workaround for now (since we use a shared domain)
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    // On localhost return this
    return {
      user_id: 'localhost_user_id',
      user_name: 'LocalhostUser',
      image_url: 'https://www.gravatar.com/avatar/',
    };
  }
  // get singleton instance
  const user_info_from_zcmain = UserService.getInstance();

  if (!user_info_from_zcmain.userData) {
    // Not Logged In, so return anonymous user info
    return {
      user_id: 'anonymous',
      user_name: 'Anonymous',
      image_url: 'https://ui-avatars.com/api/?name=Anonymous&background=random',
    };
  }

  // Logged In, so return user info
  return {
    user_id: user_info_from_zcmain.id,
    user_name: user_info_from_zcmain.user_name,
    image_url: user_info_from_zcmain.image_url ? user_info_from_zcmain.image_url : profileImage,
  };
}

export function getCurrentOrganisation() {
  const organisation_id = localStorage.getItem('currentWorkspace');

  if (!organisation_id) {
    return null;
  }

  return organisation_id;
}

export function getAuthToken() {
  const auth_token = sessionStorage.getItem('token');

  if (!auth_token) {
    return null;
  }

  return auth_token;
}

export function getChessBotData() {
  // Later may change to check Bot Info from API call to Backend

  // Temp Fix for now
  return {
    user_id: 'chessbot',
    user_name: 'Chess Bot',
    image_url: botImage,
  };
}
