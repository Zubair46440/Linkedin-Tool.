const Prospect = require("../models/Prospect");

exports.getProspects = async (req, res) => {
  try {
    const prospects = await Prospect.find();
    res.json(prospects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProspect = async (req, res) => {
  try {
    const { name, title, company, skills, additionalInfo, image, message } = req.body;
    const newProspect = new Prospect({
      name, title, company, skills, additionalInfo, image, message
    });
    const savedProspect = await newProspect.save();
    res.status(201).json(savedProspect);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
