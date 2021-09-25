// Package Modules
const router = require("express").Router();

// Custom
const gameRoute = require("./game.route");
const resultRoute = require("./result.route");
const InfoCtrl = require("../../controllers/info.controller");
const { userAuth } = require("../../middlewares/user_auth.middleware");

/**
 * @swagger
 * /api/v1/info:
 *  get:
 *   summary: Gets general plugin info
 *   description: Returns all the information for this plugin
 *   responses:
 *    200:
 *      description: A successful response
 *    500:
 *      description: An error occurred
 */
router.get("/info", InfoCtrl.getPluginInfo);

/**
 * @swagger
 * /api/v1/sidebar:
 *  get:
 *   summary: Gets sidebar info
 *   description: Returns all sidebar information for a given user
 *   parameters:
 *    - name: user
 *      in: query
 *      required: true
 *    - name: org
 *      in: query
 *      required: true
 *   responses:
 *    200:
 *      description: A successful response
 *    500:
 *      description: An error occurred
 */
router.get("/sidebar", /*userAuth*/ InfoCtrl.getSideBarInfo);

// Game Endpoints
router.use("/game", gameRoute);

// Result Endpoints
router.use("/result", resultRoute);

router.get("/ping", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Export Module
module.exports = router;
