const mongoose = require("mongoose");

const prospectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    default: [],
  },
  additionalInfo: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    default: "", // AI-generated message will be stored here
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Prospect", prospectSchema);
