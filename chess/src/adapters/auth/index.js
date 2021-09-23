// Import api call adapter
import { get } from "../xhr";
import axios from "axios";
import { GetUserInfo } from "@zuri/control";

async function login() {
  const { data } = await axios.post("https://api.zuri.chat/auth/login", {
    email: "eosabiya@gmail.com",
    password: "password"
  });

  return data;
}

export async function zc_main_user_info() {
  const login_info = await login();
  console.log(login_info);
  console.log(GetUserInfo());
}

export function getLoggedInUserData() {
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