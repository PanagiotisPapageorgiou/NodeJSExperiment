var express = require('express');
var router = express.Router();
const basicAuth = require('express-basic-auth');

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

// Classic Blacklisting - GET
router.get('/GET/classic_blacklisting', regular_controller.classic_blacklisting_get);

// Classic Blacklisting - POST Form
router.get('/POST/classic_blacklisting', regular_controller.classic_blacklisting_post);
router.post('/POST/classic_blacklisting', regular_controller.classic_blacklisting_post);

// Classic Hashing - GET
router.get('/GET/classic_hash', regular_controller.classic_hash_get);

// Classic Hashing - POST Form
router.get('/POST/classic_hash', regular_controller.classic_hash_post);
router.post('/POST/classic_hash', regular_controller.classic_hash_post);

// Classic Basic Auth - GET
router.get('/GET/classic_basic_auth', basicAuth({users: { 'admin': 'admin' }, unauthorizedResponse: 'Sorry - you need valid credentials to be granted access!', challenge: true}), regular_controller.classic_basic_auth_get);

// Classic Hashing - POST Form
router.get('/POST/classic_basic_auth', basicAuth({users: { 'admin': 'admin' }, unauthorizedResponse: 'Sorry - you need valid credentials to be granted access!', challenge: true}), regular_controller.classic_basic_auth_post);
router.post('/POST/classic_basic_auth', basicAuth({users: { 'admin': 'admin' }, unauthorizedResponse: 'Sorry - you need valid credentials to be granted access!', challenge: true}), regular_controller.classic_basic_auth_post);

module.exports = router;