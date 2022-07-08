const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  roles: {
    User: {
      type: Number,
      default: 2001,
    },
    Editor: Number,
    Admin: Number,
  },
  password: {
    type: String,
    required: true,
  },
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
  caseChallengeId: String,
  refreshToken: String,
});

module.exports = mongoose.model("User", userSchema);
