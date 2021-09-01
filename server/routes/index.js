const path = require("path");
const { Router } = require("express");

// Importing the controllers
const informationController = require("../controllers/informationController");
const gameController = require('../controllers/gameController');

// Setup Express Router
const router = Router();

// Endpoints
router.get("/info", informationController.HandleInformation);

router.get("/sideBar", informationController.HandleSideBarInfo);

router.get('/createGame', gameController.HandleGameCreation);

router.get("/ping", (req, res) => {
    res.json({ message: "Hello from server!" });
});

router.get("/ping2", (req, res) => {
    res.json({ message: "Hello from server!" });
});

module.exports = router;
