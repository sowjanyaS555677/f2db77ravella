var express = require('express');
var Run_controller=require('../controllers/Run')
var router = express.Router();

/* home page */

router.get('/', Run_controller.Run_view_all_Page);

module.exports = router;