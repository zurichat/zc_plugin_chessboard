const router = require("express").Router();

//version one routes
const v1 = require("./v1/index");

// version one routes
router.use("/v1", v1);

// version two routes - goes down here

module.exports = router;
