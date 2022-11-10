var Run = require('../models/Run');

// List of all Runs

exports.Run_list = async function (req, res) {

 try {

 theRuns = await Run.find();

 res.send(theRuns);

 }

 catch (err) {

 res.status(500);

 res.send(`{"error": ${err}}`);

 }

};

// for a specific Run.

exports.Run_detail = function (req, res) {

 res.send('NOT IMPLEMENTED: Run detail: ' + req.params.id);

};

// Handle Run create on POST.

exports.Run_create_post = async function (req, res) {
 console.log(req.body)
 let document = new Run();
 // We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
 // and require that it be a json object
 // {"Run_type":"goat", "cost":12, "size":"large"}
 document.name = req.body.name;
document.duration = req.body.duration;
 document.director = req.body.director;
 try {
 let result = await document.save();
 res.send(result);
 }
catch (err) {
 res.status(500);
 res.send(`{"error": ${err}}`);
 }

};

// Handle Run delete form on DELETE.

exports.Run_delete = function (req, res) {
 res.send('NOT IMPLEMENTED: Run delete DELETE ' + req.params.id);

};

// Handle Run update form on PUT.

exports.Run_update_put = function (req, res) {
 res.send('NOT IMPLEMENTED: Run update PUT' + req.params.id);

};

exports.flim_view_all_Page = async function (req, res) {
 try {

 theRuns = await Run.find();

 res.render('Runs', { title: 'Run Search Results', results: theRuns });
 }
 catch (err) {

res.status(500);

 res.send(`{"error": ${err}}`);
 }

};