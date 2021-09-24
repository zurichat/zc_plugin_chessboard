// Import api call adapter
import { get } from "../xhr";
import { GetUserInfo } from "@zuri/control";

export function getLoggedInUserData() {

  // // Variable to get User Info Data - Mocking Global Variables
  // let logged_in_user_from_zc_main;

  // // Try to set user info from ZC_Main
  // (async function () {
  //   logged_in_user_from_zc_main = await GetUserInfo();
  // })();

  // // Localhost can't use the auth function
  // if (location.hostname === "localhost" && location.hostname === "127.0.0.1") {

  //   // Just return hardcoded info
  //   return {
  //     user_id: "localhost_user_id",
  //     user_name: "LocalhostUser",
  //     image_url: "https://www.gravatar.com/avatar/",
  //   };
  // } else {
  //   // Set timeout to let await resolve (the only hack i could find to make await work in synchronous function)
  //   setTimeout(() => {
  //     return {
  //       user_id: logged_in_user_from_zc_main._id,
  //       user_name: logged_in_user_from_zc_main.first_name + " " + logged_in_user_from_zc_main.last_name,
  //       image_url: `https://ui-avatars.com/api/?name=${logged_in_user_from_zc_main.first_name}&background=random&uppercase=false`,
  //     };
  //   })
  // }

  // Workaround for now (since we use a shared domain)
  if (location.hostname === "localhost" && location.hostname === "127.0.0.1") {
    return {
      user_id: "localhost_user_id",
      user_name: "LocalhostUser",
      image_url: "https://www.gravatar.com/avatar/",
    };
  } else {
    var logged_in_user_from_zc_main = localStorage.getItem('user');

    if (!user) {
      // Omooo, no user info, so return empty object
      return {
        user_id: "",
        user_name: "",
        image_url: "",
      };
    }

    return {
      user_id: logged_in_user_from_zc_main.id,
      user_name: logged_in_user_from_zc_main.first_name + " " + logged_in_user_from_zc_main.last_name,
      image_url: `https://ui-avatars.com/api/?name=${logged_in_user_from_zc_main.first_name}&background=random&uppercase=false`,
    };
  }
}