const axios = require("axios");
const CustomError = require("../utils/custom-error");
const { USER_URL } = require("../config/index");

// GET req to zc_core to validate and fetch user details with the provided token
exports.userAuth = async (org, userId, token) => {
  try {
    const response = await axios.get(`${USER_URL}${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // destrucures registered organisation of the user from the response
    const { Organizations } = response.data.data;

    // confirm if user belongs to an organizations from the response, the validator returns true
    if (Organizations.indexOf(org) > -1) {
      return true;
    }
    return false;
  } catch (error) {
    throw new CustomError(`Can't verify user from db: ${error}`, 502);
  }
};
