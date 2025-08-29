const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  prospect: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prospect", // Link message to a specific Prospect
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // The user who created/sent the message
    required: true,
  },
  content: {
    type: String,
    required: true, // The actual message text
  },
  status: {
    type: String,
    enum: ["draft", "sent", "responded"],
    default: "draft", // Track message progress
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Message", messageSchema);
