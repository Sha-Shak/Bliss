const mongoose = require("mongoose");

const TherapistSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  licenseNo: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
});

const Therapist = mongoose.model("Therapist", TherapistSchema);

module.exports = Therapist;
