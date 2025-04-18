const express = require('express');
const router = express.Router();
const { calculation } = require('../controllers/calculatorModule'); 


router.post('/calculate', calculation);

module.exports = router;
