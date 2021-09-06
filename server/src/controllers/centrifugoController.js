const axios = require("axios");
const { SOCKER_KEY, SOCKET_URL } = require("../config/index");

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
            console.log(response.data);
            return true;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = CentrifugoController;
