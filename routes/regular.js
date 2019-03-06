var express = require('express');
var router = express.Router();

// Require controller modules.
var regular_controller = require('../controllers/regularController');

// Classic Regular Example - GET
router.get('/GET/classic', regular_controller.classic_get);

// Classic Regular Example - POST Form
router.get('/POST/classic', regular_controller.classic_post);
router.post('/POST/classic', regular_controller.classic_post);

module.exports = router;