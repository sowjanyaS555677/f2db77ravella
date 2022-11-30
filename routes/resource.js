var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Run_controller = require('../controllers/Run');
var Run_controller_view = require('../controllers/Run_views');

// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Run ROUTES ///
// POST request for creating a Run.
router.post('/Run', Run_controller.Run_create_post);
// DELETE request to delete Run.
router.delete('/Run/:id', Run_controller.Run_delete);
// PUT request to update Run.
router.put('/Run/:id', Run_controller.Run_update_put);
// GET request for one Run.
router.get('/Run/:id', Run_controller.Run_detail);
// GET request for list of all Run items.
router.get('/Run', Run_controller.Run_list);
module.exports = router;

/* GET detail costume page */ 
router.get('/detail', Run_controller_view.Run_view_one_Page); 

/* GET create costume page */ 
router.get('/create', secured,Run_controller_view.Run_create_Page); 

///* GET create update page */ 
router.get('/update', secured,Run_controller_view.Run_update_Page); 

/* GET delete costume page */ 
router.get('/delete', secured,Run_controller_view.Run_delete_Page); 


