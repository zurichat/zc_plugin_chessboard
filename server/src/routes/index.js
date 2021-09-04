// Package Modules
const router = require("express").Router();

// Custom Modules
const InfoCtrl = require("../controllers/info.controller");
const GameCtrl = require("../controllers/game.controller");
<<<<<<< HEAD
=======
const UserCtrl = require("../controllers/user.controller");
const ResultCtrl = require("../controllers/result.controller");
>>>>>>> a0fb237a2da881841425e4a29d0112d9984a569c

// Endpoints
router.get("/info", InfoCtrl.getPluginInfo);

router.get("/sideBar", InfoCtrl.getSideBarInfo);

router.post("/createGame", GameCtrl.create);
router.post("/joingame", GameCtrl.join);
router.post("/move", GameCtrl.move);

<<<<<<< HEAD
=======
// temporary to test db function
router.post("/dbWrite", UserCtrl.userCreate);

// temporary to test db function
router.get("/dbRead", UserCtrl.getAllUsers);

router.get("/dbGameResult", ResultCtrl.createGameResult);

>>>>>>> a0fb237a2da881841425e4a29d0112d9984a569c
router.get("/ping", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// Export Module
module.exports = router