var Run = require('../models/Run');

// Handle a show one view with id specified by query 
exports.Run_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Run.findById( req.query.id) 
        res.render('rundetail',  
{ title: 'Run Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 // Handle building the view for creating a Run. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Run_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('Runcreate', { title: 'Run Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a Run. 
// query provides the id 
exports.Run_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Run.findById(req.query.id) 
        res.render('runupdate', { title: 'Run Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.Run_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Run.findById(req.query.id) 
        res.render('rundelete', { title: 'Run Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 