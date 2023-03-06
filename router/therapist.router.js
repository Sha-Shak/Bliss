const router = require("express").Router();
const therapistController = require("../controllers/therapist.controller");
const authMiddleware =  require('../middleware/auth.middleware')

router.get("/", authMiddleware, therapistController.getAllPatients);
router.post("/", therapistController.createTherapist);
// router.put("/:id", authMiddleware, therapistController.archivePatient);
// router.put("/", authMiddleware, therapistController.prescriptionPatient);

module.exports = router;