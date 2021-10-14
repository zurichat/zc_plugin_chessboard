const axios = require("axios");
const CustomError = require("../utils/custom-error");
const { WELCOME_URL } = require("../config/index");
const response = require("../utils/response");

// GET req to zc_core to validate and fetch user details with the provided token
exports.userAuth = async (req, res, next) => {
  try {
    let { user_id } = req.body;

    // Also get user_id from query for get requests
    if (!user_id) {
      user_id = req.query.user_id;
    }

    if (
      user_id === "chessbot" ||
      user_id === "anonymous" ||
      user_id === "localhost_user_id"
    )
      return next();

    const authorization = req.get("Authorization");

    if (!authorization) throw new CustomError("Authentication failed", 403);

    const token = authorization.split(" ")[1];

    if (!token || token === " ")
      throw new CustomError("Authentication failed", 403);

    const { status } = await axios.get(WELCOME_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (status === 200) return next();

    throw new CustomError("Authentication failed", 403);
  } catch (error) {
    throw new CustomError(`Can't verify user from db: ${error}`, 502);
  }
};

exports.memberAuth = async (req, res, next) => {

  let BASE_API_ENDPOINT = 'https://api.zuri.chat/organizations'
  let { org_id: organisation, member_id } = req.query;
  if (!organisation && !member_id) {
    // Use hardcoded organisation
    // organisation = "6145c2d0285e4a18402073f6";

    res.status(400).send(response("Organisation & member_id are required as query parameters", null, false));
  } else {
    // Set the organisation id in req variable
    res.locals.organisation_id = organisation;
  }
  // Get 
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new CustomError(`No Authorization or session expired.`, 401);

    const [_, token] = authorization.split(' ');
    if (!token) throw new CustomError(`No Authorization or session expired.`, 401);
    // Make the request
    const response = await axios.get(
      `${BASE_API_ENDPOINT}/${organisation}/members/{member_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data.data);
    if (response.data.code == 200) {
      next()
    }
    throw new CustomError(`Not authorized.`, 401);
  } catch (error) {
    throw new CustomError(`Can't verify user from db: ${error}`, 502);
  }
}
