const router = require("express").Router();
const therapistController = require("../controllers/therapist.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/patientlist", authMiddleware, therapistController.getAllPatients);
router.post("/signup", therapistController.createTherapist);
router.get("/all", therapistController.getAll);
router.post("/login", therapistController.login);
// router.put("/:id", authMiddleware, therapistController.archivePatient);
// router.put("/", authMiddleware, therapistController.prescriptionPatient);

module.exports = router;
