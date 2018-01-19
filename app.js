var express = require("express");
var app = express();
var request = require("request");

// Example API call
app.get("/results", function(req, res){
   request("https://www.omdbapi.com/?apikey=thewdb&s=nexus", function(error, response, body){
        if (!error && response.statusCode === 200){
            res.send(body);
        }
   }); 
});


// Check that the server is running successfully
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The movie search app is running");
});