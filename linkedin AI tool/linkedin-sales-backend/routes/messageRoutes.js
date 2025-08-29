const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Get all messages" });
});


router.post("/", (req, res) => {
  res.json({ message: "Send message" });
});

module.exports = router;
