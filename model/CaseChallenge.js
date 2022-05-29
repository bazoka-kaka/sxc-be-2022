const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const caseChallengeSchema = new Schema({
  team: {
    type: String,
    required: true,
  },
  leader: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    university: {
      type: String,
      required: true,
    },
    batch: {
      type: Number,
      required: true,
    },
  },
  member1: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    university: {
      type: String,
      required: true,
    },
    batch: {
      type: Number,
      required: true,
    },
  },
  member2: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    university: {
      type: String,
      required: true,
    },
    batch: {
      type: Number,
      required: true,
    },
  },
});

module.exports = mongoose.model("CaseChallenge", caseChallengeSchema);
