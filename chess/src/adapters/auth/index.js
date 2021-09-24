// Import api call adapter
import { get } from "../xhr";
import axios from "axios";
import { GetUserInfo } from "@zuri/control";

export function getLoggedInUserData() {
  
  GetUserInfo().then(user => {
    console.log(user);
  });

  return {
    user_id: "new_player_one_user_id",
    user_name: "NewcodeJonin",
    image_url: "https://www.gravatar.com/avatar/",
  };
}

export function testPlayerTwoData() {
  return {
    user_id: "new_player_two_user_id",
    user_name: "michael",
    image_url: "https://www.gravatar.com/avatar/",
  };
}