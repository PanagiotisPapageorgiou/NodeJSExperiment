var express = require('express');
var router = express.Router();

// Require controller modules.
var filter_controller = require('../controllers/filterController');

router.get("/lax_domain_name", filter_controller.lax_domain_name);
router.post("/lax_domain_name", filter_controller.lax_domain_name);

router.get("/multiple_os_commands_blacklisting", filter_controller.multiple_os_commands_blacklisting);
router.post("/multiple_os_commands_blacklisting", filter_controller.multiple_os_commands_blacklisting);

module.exports = router;
