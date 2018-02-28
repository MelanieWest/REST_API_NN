const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//middleware is anything we use between the request and response


//we're going to use the express router for all our routes
//(get, post, etc) and instead of saying 'app.get' we'll say
//'router.get', as shown:

//get a list of ninjas from the database
router.get('/ninjas', function(req,res,next){
    //to test the route, we are just sending a simple response object
  res.send({type:'GET'});
});

//add a new ninja to the db
router.post('/ninjas', function(req,res,next){

    //since we are importing the model (object), we can use the model here
    //var ninja = new Ninja(req.body);
    //use the mongoose method save()
    //ninja.save();

    //or we can combine the prev 2 actions using the mongoose create method.
    //this returns a promise, so we can wait for it to finish
    //'req.body' is the data we received. 'ninja' is returned by the promise once
    //the data is saved to mongoose.  Tested in Postman, works great.  Except no error handling.
    //(name is required by the model - right now we crash if it's not provided)
    
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);        //this is what the user sees
    }).catch(next);

        //this was used when we directly sent a json object using Postman, but no data storage
    // res.send({
    //     type:'POST',
    //     name: req.body.name,
    //     rank: req.body.rank
    // });
});

//update a ninja in the db
router.put('/ninjas/:id', function(req,res,next){
    res.send({type:'PUT'});
});

//delete a specific ninja from the db
router.delete('/ninjas/:id', function(req,res,next){
    res.send({type:'DELETE'});
});


module.exports = router;