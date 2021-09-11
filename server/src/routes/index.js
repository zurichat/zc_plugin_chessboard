const router = require("express").Router();

//version one routes
const v1 = require("./v1/index");

// version one routes
router.use("/v1", v1);

// version two routes - goes down here
// router.use("/v2", v2);

router.post("/createGame", GameCtrl.create);
router.post("/joingame", GameCtrl.join);
// router.post("/move", GameCtrl.move);

// get all game ids
router.get("/fetchgameids", GameCtrl.get_game_ids);

// temporary to test db function
router.post("/dbWrite", UserCtrl.userCreate);

// temporary to test db function
router.get("/dbRead", UserCtrl.getAllUsers);

// temporary to test db function
router.put("/dbUpdate/:id", UserCtrl.userUpdate);

router.get("/dbGameResult", ResultCtrl.createGameResult);

// update game with result id in db
router.patch("/dbUpdateResult", ResultCtrl.updateGameResult);

router.get("/ping", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Export Module
module.exports = router;
