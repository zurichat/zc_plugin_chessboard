// Import api call adapter
import { get } from "../xhr";
import axios from "axios";
import { GetUserInfo } from "@zuri/control";

export async function getLoggedInUserData() {
  const logged_in_user_from_zc_main = await GetUserInfo();

  if (location.hostname === "localhost" || location.hostname === "127.0.0.1"){
    return {
      user_id: "new_player_one_user_id",
      user_name: "NewcodeJonin",
      image_url: "https://www.gravatar.com/avatar/",
    };
  } else {
    return {
      user_id: logged_in_user_from_zc_main.user_id,
      user_name: logged_in_user_from_zc_main.first_name + " " + logged_in_user_from_zc_main.last_name,
      image_url: `https://ui-avatars.com/api/?name=${logged_in_user_from_zc_main.first_name}&background=random&uppercase=false`,
    };
  }  
}