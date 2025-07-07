const express = require('express');
const router = express.Router();
const { handleUserInput, getAllInputs } = require('../controllers/inputController');

// POST to save input
router.post('/', handleUserInput);

// GET to fetch all saved input
router.get('/', getAllInputs);

module.exports = router;
