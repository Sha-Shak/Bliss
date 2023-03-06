const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const patient = require("./router/patient.router");
const therapist = require("./router/therapist.router")

dotenv.config();
const PORT = 3000;
const corsConfig = {
  origin: "http://localhost:4200",
  credentials: true,
  exposedHeaders: "Authorization",
};
app.use(cors(corsConfig));
app.use(express.json());
app.use("/patient",patient)
app.use("/therapist", therapist);

(async function bootstrap() {
  try {
    await mongoose.connect(process.env.URL);
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
