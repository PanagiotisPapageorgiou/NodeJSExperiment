var express = require('express');
var router = express.Router();

// Require controller modules.
var regular_controller = require('../controllers/regularController');

// Classic Regular Example - GET
router.get('/GET/classic', regular_controller.classic_get);

module.exports = router;