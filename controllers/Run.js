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
exports.Run_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Run.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
    document.Run_age = req.body.Run_age;
    document.Run_rank = req.body.Run_rank;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Costume delete on DELETE. 
exports.Run_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Run.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
// Handle Costume update form on PUT. 
exports.Run_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Run.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Run_type)  
               toUpdate.Run_type = req.body.Run_type; 
        if(req.body.Run_age) toUpdate.Run_age = req.body.Run_age; 
        if(req.body.Run_rank) toUpdate.Run_rank = req.body.Run_rank; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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
