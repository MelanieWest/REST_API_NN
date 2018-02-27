const express = require('express');
const router = express.Router();

//we're going to use the express router for all our routes
//(get, post, etc) and instead of saying 'app.get' we'll say
//'router.get', as shown:

//get a list of ninjas from the database
router.get('/ninjas', function(req,res){
    //to test the route, we are just sending a simple response object
  res.send({type:'GET'});
});

//add a new ninja to the db
router.post('/ninjas', function(req,res){
    res.send({type:'POST'});
});

//update a ninja in the db
router.put('/ninjas/:id', function(req,res){
    res.send({type:'PUT'});
});

//delete a specific ninja from the db
router.delete('/ninjas/:id', function(req,res){
    res.send({type:'DELETE'});
});


module.exports = router;