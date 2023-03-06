const jwt = require("jsonwebtoken");
const Therapist = require("../models/therapist.model");
const patient = require("./../models/patient.model");

const SECRET_KEY = process.env.SECRET_KEY || "lalala this isnt secure";
// REMOVE-END

const authMiddleware = async (req, res, next) => {
  // REMOVE-START
  // extract token from auth headers
  const authHeaders = req.headers["authorization"];

  if (!authHeaders) return res.sendStatus(403);
  const token = authHeaders.split(" ")[1]; //Bearer eyasjhxbajsxbasbxabsx

  try {
    // verify & decode token payload,
    const { _id } = jwt.verify(token, SECRET_KEY);
    console.log(_id);
    // attempt to find therapist object and set to req
    const therapist = await Therapist.findOne({ _id });
    if (!therapist) return res.sendStatus(401);
    req.therapist = therapist;
    req.category= therapist.category;
    next();

  } catch (error) {
    console.log("error", error);
    res.sendStatus(401);
  }
  // REMOVE-END
};

module.exports = authMiddleware;
