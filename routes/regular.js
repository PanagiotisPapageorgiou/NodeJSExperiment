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

// Classic hex Example - GET
router.get('/GET/classic_hex', regular_controller.classic_hex_get);

// Classic hex Example - POST Form
router.get('/POST/classic_hex', regular_controller.classic_hex_post);
router.post('/POST/classic_hex', regular_controller.classic_hex_post);

// Classic Quote Example - GET
router.get('/GET/classic_quote', regular_controller.classic_quote_get);

// Classic Quote Example - POST Form
router.get('/POST/classic_quote', regular_controller.classic_quote_post);
router.post('/POST/classic_quote', regular_controller.classic_quote_post);

// Classic Double Quote Example - GET
router.get('/GET/classic_double_quote', regular_controller.classic_double_quote_get);

// Classic Double Quote Example - POST Form
router.get('/POST/classic_double_quote', regular_controller.classic_double_quote_post);
router.post('/POST/classic_double_quote', regular_controller.classic_double_quote_post);

// Classic Non Space Example - GET
router.get('/GET/classic_non_space', regular_controller.classic_non_space_get);

// Classic Non Space Example - POST Form
router.get('/POST/classic_non_space', regular_controller.classic_non_space_post);
router.post('/POST/classic_non_space', regular_controller.classic_non_space_post);

module.exports = router;