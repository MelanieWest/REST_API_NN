const express = require('express');
const router = express.Router();

//we're going to use the express router for all our routes
//(get, post, etc) and instead of saying 'app.get' we'll say
//'router.get', as shown:

//router.get('/api/ninjas')
//I want to get the route /api/ninjas, but since I'm in the api
//file, I don't need the api at the front

//get a list of ninjas from the database
router.get('/ninjas', function(req,res){
  res.send({type:'GET'});
});

//add a new ninja to the db
router.post('/ninjas', function(req,res){
    res.send({type:'POST'});
});

//update a ninja in the db
router.put('/ninjas/id', function(req,res){
    res.send({type:'PUT'});
});

//delete a specific ninja from the db
router.delete('/ninjas/id', function(req,res){
    res.send({type:'DELETE'});
});

//these were our practice routes to mess around.
// // '/' is the request sent; 'req' and 'res' are data sent and received
// app.get('/',function(req,res){
//     console.log('GET request');
//     res.end(); //this is a quick easy way to end the response so the blue circle stops spinning
// });


// // '/api' is the request sent; 'req' and 'res' are data sent and received
// app.get('/api',function(req,res){
//     console.log('GET request');
//     res.send({name:"Yoshi"}); //this is a quick easy way to end the response so the blue circle stops spinning
// });


module.exports = router;