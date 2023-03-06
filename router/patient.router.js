const router = require('express').Router();
const {createPatient} = require('../controllers/patient.controller')
console.log(createPatient)
router.post('/', createPatient);

module.exports = router