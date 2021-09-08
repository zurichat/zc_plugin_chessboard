// Package Modules
const router = require("express").Router();

// Custom
const gameRoute = require("./game.route");
const resultRoute = require("./result.route");
const InfoCtrl = require("../../controllers/info.controller");

// Plugin Info Endpoints

/**
 * @swagger
 * /api/v1/info:
 *    get:
 *      description: Gets the general plugin information
 *      responses:
 *        200:
 *          description: Plugin Information Retrieved
 *        500:
 *          description: something went wrong in the server
 */
router.get("/info", InfoCtrl.getPluginInfo);

// Get Sidebar Links
router.get("/sidebar", InfoCtrl.getSideBarInfo);

// Game Endpoints
router.use("/game", gameRoute);

// Result Endpoints
router.use("/result", resultRoute);

router.get("/ping", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Export Module
module.exports = router;
