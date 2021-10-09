// Import api call adapter
import botImage from "../../assets/bot/bot-image.svg";
import defaultProfileImage from "../../assets/profile-image/default-profile-picture-avatar-png-green.png";
import { UserService } from "../userService";

let profileImage = defaultProfileImage;

export function getLoggedInUserData() {
  // Workaround for now (since we use a shared domain)
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    // On localhost return this
    return {
      user_id: "localhost_user_id",
      user_name: "LocalhostUser",
      image_url: "https://www.gravatar.com/avatar/",
    };
  } else {
    // get singleton instance
    const userData = UserService.getInstance();

    if (!userData) {
      // Not Logged In, so return anonymous user info
      return {
        user_id: "anonymous",
        user_name: "Anonymous",
        image_url:
          "https://ui-avatars.com/api/?name=Anonymous&background=random",
      };
    }
    // Logged In, so return user info
    return {
      user_id: userData.id,
      user_name: userData.user_name,
      image_url: userData.image_url ? userData.image_url : profileImage,
    };
  }
}

export function getCurrentOrganisation() {
  let organisation_id = localStorage.getItem("currentWorkspace");

  if (!organisation_id) {
    return null;
  }

  return organisation_id;
}

export function getAuthToken() {
  let auth_token = sessionStorage.getItem("token");

  if (!auth_token) {
    return null;
  }

  return auth_token;
}

export function getChessBotData() {
  // Later may change to check Bot Info from API call to Backend

  // Temp Fix for now
  return {
    user_id: "chessbot",
    user_name: "Chess Bot",
    image_url: botImage,
  };
}
