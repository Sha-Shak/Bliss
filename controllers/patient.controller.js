const Therapist = require("../models/therapist.model");
const Patient = require("./../models/patient.model");

const createPatient = async (req, res) => {
  if (req.body.email) {
    try {
      const cat = req.body.category;
      const therapist = await Therapist.find({ category: cat });
      let email = therapist.map((el) => el.email);
      let ticket = { ...req.body, assignedTo: email };
      const result = await Patient.create(ticket);
      res.status(201);
      res.send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  } else {
    res.status(400).send("Insufficient data");
  }
};
module.exports = { createPatient };
