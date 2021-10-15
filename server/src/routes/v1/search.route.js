// Package Modules
const router = require("express").Router();

const { orgAuth } = require("../../middlewares/organisation.middleware");
const { userAuth } = require("../../middlewares/user_auth.middleware");

// All Endpoints require authentication and organisationID to be accessed
router.use(orgAuth);
router.use(userAuth);

// Custom Modules
const searchCtrl = require("../../controllers/search.controller");

/**
 * @swagger
 * /api/v1/search/:org_id/:member_id:
 *  get:
 *   summary: Search for games in the database
 *   description: returns a paginated response of all the matched game objects in the database
 *   responses:
 *    200:
 *      description: A successful response
 *    500:
 *      description: An error occurred
 */
router.get("/search/:org_id/:member_id", (req, res) => {
  new searchCtrl(res.locals.organisation_id).search(req, res);
});

/**
 * @swagger
 * /api/v1/search-suggestions/:org_id/:member_id:
 *  get:
 *   summary: Search for games in the database
 *   description: returns an array of keywords for suggestions that match game objects in the database
 *   responses:
 *    200:
 *      description: A successful response
 *    500:
 *      description: An error occurred
 */
router.get("/search-suggestions/:org_id/:member_id", (req, res) => {
  new searchCtrl(res.locals.organisation_id).searchSuggestions(req, res);
});

// Export Module
module.exports = router;