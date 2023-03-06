const mongoose = require("mongoose");

const PatientSchema = mongoose.Schema({
  name: {
    type: String,
  },
 category: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: String,
  },
  relationStatus: {
    type: String,
  },
  traumaExperience: {
    type: String,
  },
  email: {
    type: String,
  },
  mentalHealthRate: {
    type: Number,
  },
  assignedTo: {
    type: [String],
  },
  followUpStatus : {
    type : String
  },
  additionalInfo : {
    type : [String]
  }
});
const Patient = mongoose.model("patient", PatientSchema);
module.exports = Patient
