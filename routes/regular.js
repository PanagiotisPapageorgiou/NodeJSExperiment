var express = require('express');
var router = express.Router();

// Require controller modules.
var regular_controller = require('../controllers/regularController');

// Classic Regular Example - GET
router.get('/GET/classic', regular_controller.classic_get);

// Classic Regular Example - POST Form
router.get('/POST/classic', regular_controller.classic_post);
router.post('/POST/classic', regular_controller.classic_post);

// Classic b64 Example - GET
router.get('/GET/classic_b64', regular_controller.classic_b64_get);

// Classic b64 Example - POST Form
router.get('/POST/classic_b64', regular_controller.classic_b64_post);
router.post('/POST/classic_b64', regular_controller.classic_b64_post);

module.exports = router;