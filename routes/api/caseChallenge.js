const express = require("express");
const router = express.Router();
const caseChallengeController = require("../../controllers/caseChallengeController");
const ROLES_LIST = require("../../config/roles_list");
const verifyRoles = require("../../middleware/verifyRoles");

router
  .route("/")
  .get(verifyRoles(ROLES_LIST.Admin), caseChallengeController.getAllTeams)
  .post(
    verifyRoles(ROLES_LIST.User, ROLES_LIST.Admin),
    caseChallengeController.createNewTeam
  )
  .put(verifyRoles(ROLES_LIST.Admin), caseChallengeController.updateTeam)
  .delete(verifyRoles(ROLES_LIST.Admin), caseChallengeController.deleteTeam);

router.route("/:id").get(caseChallengeController.getTeam);

module.exports = router;
