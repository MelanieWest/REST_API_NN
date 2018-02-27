//I can name this anything; also, even though it's in the 'node' folder,
//the program knows where to look for it so I don't have to name the path

const express = require("express");
//I need to link with the routes/api file, which contains all my routes:
const routes = require('/routes/api');

//set up express app function, which has many http methods
//(such as get, post, etc) built into it
const app = express();

//when I use my routes, I want them to have the 'api' tag in them;
//add that here and it will be added to the front of all the route names
app.use('/api',routes);

//set it up to listen for requests that I might make
app.listen(process.env.port || 4000, function(){
    console.log('listening on port 4000 for requests')
});