var express = require('express');
var router = express.Router();

// Require controller modules.
var cookie_controller = require('../controllers/cookieController');

// Classic Cookie Example
router.get('/cookie_classic', cookie_controller.classic_get);

module.exports = router;