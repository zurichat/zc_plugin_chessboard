const path = require("path");
const { Router } = require("express");
const informationController = require("../controllers/informationController");
const gameController = require('../controllers/newGameController');

const router = Router();

router.route("/info").get(informationController.HandleInformation);

router.route("/sideBar").get(informationController.HandleSideBarInfo);

router.route('/createGame').post(gameController.HandleGameCreation);

// taken out later
router.route("/test").get((req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
});

module.exports = router;
