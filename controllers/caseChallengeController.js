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
    !req?.body?.buktiBayar ||
    !req?.body?.registererId
  ) {
    return res.status(400).json({
      message:
        "Team name, leader data, bukti bayar, registererId and members data are required!",
    });
  }

  try {
    const result = await CaseChallenge.create({
      team: req.body.team,
      leader: req.body.leader,
      member1: req.body.member1,
      member2: req.body?.member2,
      registererId: req.body.registererId,
      buktiBayar: req.body.buktiBayar,
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
  if (req.body?.registererId) team.registererId = req.body.registererId;
  if (req.body?.leader) {
    if (req.body.leader?.name) team.leader.name = req.body.leader?.name;
    if (req.body.leader?.email) team.leader.email = req.body.leader?.email;
    if (req.body.leader?.phone) team.leader.phone = req.body.leader?.phone;
    if (req.body.leader?.university)
      team.leader.university = req.body.leader?.university;
    if (req.body.leader?.batch) team.leader.batch = req.body.leader?.batch;
  }
  if (req.body?.member1) {
    if (req.body.member1?.name) team.member1.name = req.body.member1?.name;
    if (req.body.member1?.email) team.member1.email = req.body.member1?.email;
    if (req.body.member1?.phone) team.member1.phone = req.body.member1?.phone;
    if (req.body.member1?.university)
      team.member1.university = req.body.member1?.university;
    if (req.body.member1?.batch) team.member1.batch = req.body.member1?.batch;
  }
  if (req.body?.member2) {
    if (req.body.member2?.name) team.member2.name = req.body.member2?.name;
    if (req.body.member2?.email) team.member2.email = req.body.member2?.email;
    if (req.body.member2?.phone) team.member2.phone = req.body.member2?.phone;
    if (req.body.member2?.university)
      team.member2.university = req.body.member2?.university;
    if (req.body.member2?.batch) team.member2.batch = req.body.member2?.batch;
  }
  if (req.body?.buktiBayar) team.buktiBayar = req.body.buktiBayar;
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
    return res.status(400).json({ message: "Registerer ID required." });

  const team = await CaseChallenge.findOne({
    registererId: req.params.id,
  }).exec();
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
