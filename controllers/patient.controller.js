const Patient = require("./../models/patient.model");

 const createPatient = async (req, res) => {
  if (req.body.email) {
    try {
      const result = await Patient.create(req.body);
      console.log(req.body);
      res.status(201);
      res.send(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(400).send("Insufficient data");
  }
};
module.exports = {createPatient}