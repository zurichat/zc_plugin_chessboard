// Import api call adapter
import { get } from "../xhr";
// import { GetUserInfo  } from "@zuri/zuri-control"

export function getLoggedInUserData() {
  return {
    user_id: "player_one_user_id",
    user_name: "codeJonin",
    image_url: "https://www.gravatar.com/avatar/",
  };
}

export function testPlayerTwoData() {
  return {
    user_id: "player_two_user_id",
    user_name: "michael",
    image_url: "https://www.gravatar.com/avatar/",
  };
}

export function zc_main_user_info() {
  GetUserInfo();
  console.log(GetUserInfo());
}
