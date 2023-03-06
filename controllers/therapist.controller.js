// REMOVE-START
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Therapist = require("./../models/therapist.model");
const Patient = require("./../models/patient.model");
const SECRET_KEY = process.env.SECRET_KEY || "lalala this isnt secure";

const getAllPatients = async (req, res) => {
  req.therapist = "couple";

  try {
    const patients = await Patient.find({ category: req.therapist });

    res.status(200).send(patients);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createTherapist = async (req, res) => {
  const { email, password } = req.body;
  const therapist = await Therapist.findOne({ email: email });
  if (therapist)
    return res
      .status(409)
      .send({ error: "409", message: "Therapist already exists" });
  try {
    if (password === "") throw new Error();
    const hash = await bcrypt.hash(password, 10);
    const newTherapist = new Therapist({
      ...req.body,
      password: hash,
    });
    const { _id } = await newTherapist.save();
    const accessToken = jwt.sign({ _id }, SECRET_KEY);
    res.status(201).send({ accessToken, _id });
  } catch (error) {
    res.status(400).send({ error, message: "Could not create therapist" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const therapist = await Therapist.findOne({ email: email });
    const validatedPass = await bcrypt.compare(password, therapist.password);
    if (!validatedPass) throw new Error();
    const accessToken = jwt.sign({ _id: therapist._id }, SECRET_KEY);
    res.status(200).send({ accessToken, therapist });
  } catch (error) {
    res
      .status(401)
      .send({ error: "401", message: "Username or password is incorrect" });
  }
};

const getAll = async (req, res) => {
  try {
    const therapist = await Therapist.find();
    res.status(201);
    res.send(therapist);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getAllPatients, login, createTherapist, getAll };
