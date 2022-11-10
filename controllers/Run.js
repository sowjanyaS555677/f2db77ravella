var Run = require('../models/Run');
// List of all Runs
exports.Run_list = async function (req, res) {
    try {
        theRun = await Run.find();
        res.send(theRun);
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
    // {"costume_type":"goat",  "size":"large", "cost":12}
    document.Run_type = req.body.Run_type;
    document.size = req.body.size;
    document.cost = req.body.cost;
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
exports.Run_view_all_Page = async function (req, res) {
    try {
        theRun = await Run.find();
        res.render('Run', { title: 'Run Search Results', results: theRun });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};