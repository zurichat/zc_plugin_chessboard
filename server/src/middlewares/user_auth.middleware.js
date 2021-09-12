const axios = require("axios");
const CustomError = require("../utils/custom-error");
const { USER_URL } = require("../config/index");

// GET req to zc_core to validate and fetch user details with the provided token
exports.userAuth = async (req, res, next) => {
  try {
    const { org, userId } = req.query;
    const token = req.query.token.split(" ")[1];

    const response = await axios.get(`${USER_URL}${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // destrucures registered organisation of the user from the response
    const { Organizations } = response.data.data;

    // confirm if user belongs to an organizations from the response, the validator returns true
    if (Organizations.indexOf(org) > -1) {
      return next();
    }
    throw new CustomError("Can't verify user from db: ", 403);
  } catch (error) {
    throw new CustomError(`Can't verify user from db: ${error}`, 502);
  }
};
