// Package Modules
const router = require("express").Router();

// Custom
const gameRoute = require("./game.route");
const resultRoute = require("./result.route");
const InfoCtrl = require("../../controllers/info.controller");

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
router.get("/sidebar", InfoCtrl.getSideBarInfo);

// Sidebar star item
router.put("/org/:org/rooms/:room_id/members/:user/star", InfoCtrl.createStar);

// Game Endpoints
router.use("/game", gameRoute);

// Result Endpoints
router.use("/result", resultRoute);

// install plugin endpoints
router.post("/install", InfoCtrl.installChess);

// uninstall chess endpioint
// router.delete("/uninstall", InfoCtrl.uninstallChess);

router.get("/ping", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Export Module
module.exports = router;
