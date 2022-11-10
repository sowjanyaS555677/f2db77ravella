var express = require('express');
var router = express.Router();
var Run_controlers= require('../controllers/Run');

/* GET home page. */

router.get('/', Run_controlers.Run_view_all_Page ); 

module.exports = router;