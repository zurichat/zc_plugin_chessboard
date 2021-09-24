// Import api call adapter
import { get } from "../xhr";
import axios from "axios";
import { GetUserInfo } from "@zuri/control";

export async function getLoggedInUserData() {
  const logged_in_user_from_zc_main = await GetUserInfo();

  if (location.hostname === "localhost" || location.hostname === "127.0.0.1"){
    return {
      user_id: "localhost_user_id",
      user_name: "LocalhostUser",
      image_url: "https://www.gravatar.com/avatar/",
    };
  } else {
    console.log(logged_in_user_from_zc_main);
    return {
      user_id: logged_in_user_from_zc_main._id,
      user_name: logged_in_user_from_zc_main.first_name + " " + logged_in_user_from_zc_main.last_name,
      image_url: `https://ui-avatars.com/api/?name=${logged_in_user_from_zc_main.first_name}&background=random&uppercase=false`,
    };
  }  
}