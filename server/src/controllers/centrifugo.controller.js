const axios = require("axios");
const { SOCKER_KEY, SOCKET_URL } = require("../config/index");
const CustomError = require("../utils/custom-error");

class CentrifugoController {
  static async publish(channel, data) {
    try {
      const response = await axios.post(
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
