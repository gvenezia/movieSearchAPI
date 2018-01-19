var express = require("express");
var app = express();
var request = require("request");

// Set up the app to expect ejs files
app.set("view engine", "ejs");

// Root Route
app.get("/", function(req, res){
   res.render("search");
});

// API call to OMDB using the search term entered in the root route
app.get("/results", function(req, res){
    var search = req.query.search;
    var url = "https://www.omdbapi.com/?apikey=thewdb&s=" + search;
    request(url, function(error, response, body){
        if (!error && response.statusCode === 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
   }); 
});

// Check that the server is running successfully
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The movie search app is running");
});