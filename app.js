var express = require("express");
var app = express();
var request


// Check that the server is running successfully
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is running");
});