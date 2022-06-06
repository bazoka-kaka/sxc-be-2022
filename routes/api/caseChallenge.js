const express = require("express");
const router = express.Router();
const caseChallengeController = require("../../controllers/caseChallengeController");

router
  .route("/")
  .get(caseChallengeController.getAllTeams)
  .post(caseChallengeController.createNewTeam)
  .put(caseChallengeController.updateTeam)
  .delete(caseChallengeController.deleteTeam);

router.route("/:id").get(caseChallengeController.getTeam);

module.exports = router;
