// Package Modules
const router = require("express").Router();

// Custom Modules
const InfoCtrl = require("../controllers/info.controller");
const GameCtrl = require("../controllers/game.controller");
const UserCtrl = require("../controllers/user.controller");

// Endpoints
router.get("/info", InfoCtrl.getPluginInfo);

router.get("/sideBar", InfoCtrl.getSideBarInfo);

router.get("/createGame", GameCtrl.create);


// temporary to test db function
router.get('/dbRead', UserCtrl.getAllZCUsers);

// temporary to test db function
router.post("/dbWrite", UserCtrl.userCreate);

// temporary to test db function
router.put('/dbUpdate/:id', UserCtrl.userUpdate);

// temporary to test db function
// router.delete('/dbDelete/:id', UserCtrl.userDelete);


router.get("/ping", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Export Module
module.exports = router;
