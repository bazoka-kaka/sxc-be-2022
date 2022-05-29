const CaseChallenge = require("../model/CaseChallenge");

const getAllTeams = async (req, res) => {
  const teams = await CaseChallenge.find();
  if (!teams) return res.status(204).json({ message: "No teams found." });
  res.json(teams);
};

const createNewTeam = async (req, res) => {
  if (
    !req?.body?.team ||
    !req?.body?.leader ||
    !req?.body?.member1 ||
    !req?.body?.member2
  ) {
    return res.status(400).json({
      message: "Team name, leader data, and members data are required!",
    });
  }

  try {
    const result = await CaseChallenge.create({
      team: req.body.team,
      leader: req.body.leader,
      member1: req.body.member1,
      member2: req.body.member2,
    });

    res.status(201).json(result);
  } catch (err) {
    console.error(err);
  }
};

const updateTeam = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({ message: "ID parameter is required." });
  }

  const team = await CaseChallenge.findOne({ _id: req.body.id }).exec();
  if (!team) {
    return res
      .status(204)
      .json({ message: `No team matches ID ${req.body.id}.` });
  }
  if (req.body?.team) team.team = req.body.team;
  if (req.body?.leader) team.leader = req.body.leader;
  if (req.body?.member1) team.member1 = req.body.member1;
  if (req.body?.member2) team.member2 = req.body.member2;
  const result = await team.save();
  res.json(result);
};

const deleteTeam = async (req, res) => {
  if (!req?.body?.id)
    return res.status(400).json({ message: "Team ID required." });

  const team = await CaseChallenge.findOne({ _id: req.body.id }).exec();
  if (!team) {
    return res
      .status(204)
      .json({ message: `No team matches ID ${req.body.id}.` });
  }
  const result = await team.deleteOne(); //{ _id: req.body.id }
  res.json(result);
};

const getTeam = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "Team ID required." });

  const team = await CaseChallenge.findOne({ _id: req.params.id }).exec();
  if (!team) {
    return res
      .status(204)
      .json({ message: `No team matches ID ${req.params.id}.` });
  }
  res.json(team);
};

module.exports = {
  getAllTeams,
  createNewTeam,
  updateTeam,
  deleteTeam,
  getTeam,
};
