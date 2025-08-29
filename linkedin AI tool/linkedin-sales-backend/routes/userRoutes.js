const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Get all users" });
});


router.post("/", (req, res) => {
  res.json({ message: "Register user" });
});

module.exports = router;
