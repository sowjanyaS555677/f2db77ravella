var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Run_controller = require('../controllers/Run');
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