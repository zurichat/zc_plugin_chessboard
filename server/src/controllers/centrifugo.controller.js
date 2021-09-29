const axios = require("axios");
const { SOCKER_KEY, SOCKET_URL } = require("../config/index");
const CustomError = require("../utils/custom-error");

class CentrifugoController {
  static async publish(channel, data) {
    try {
      await axios.post(
        SOCKET_URL,
        {
          method: "publish",
          params: {
            channel,
            data,
          },
        },
        {
          headers: {
            Authorization: `apikey ${SOCKER_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      return true;
    } catch (error) {
      throw new CustomError(`Unable to publish to ${channel}: ${error}`, "500");
    }
  }

  static async publishToSideBar(organisation_id, user_id, data) {
    let channel = `${organisation_id}_${user_id}_sidebar`;

    // {
    //   sidebar_url: "https://plugin.zuri.chat/sidebar"
    //   action: "add" // either add or remove
    //   update: {
    //     room_name: 'Room name',
    //     room_image: "https://url",
    //     room_url: "/plugin"
    //   }
    // }

    try {
      await axios.post(
        SOCKET_URL,
        {
          method: "publish",
          params: {
            channel,
            data,
          },
        },
        {
          headers: {
            Authorization: `apikey ${SOCKER_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      return true;
    } catch (error) {
      throw new CustomError(`Unable to publish to ${channel}: ${error}`, "500");
    }
  }
}

module.exports = CentrifugoController;
