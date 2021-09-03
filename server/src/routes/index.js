// Package Modules
const router = require("express").Router();

// Custom Modules
const InfoCtrl = require("../controllers/info.controller");
const GameCtrl = require("../controllers/game.controller");
const newUser = require("../controllers/userProfile.controller.js")

// Endpoints
router.get("/info", InfoCtrl.getPluginInfo);

router.get("/sideBar", InfoCtrl.getSideBarInfo);

router.get("/createGame", GameCtrl.create);

// temporary to test db function
router.post('/dbWriteTemp', newUser.userCreate);

// temporary to test db function
router.get('/dbReadTemp', newUser.getAllUsers);


router.get("/ping", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// Export Module
module.exports = router