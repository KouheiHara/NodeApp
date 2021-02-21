var express = require("express");
var app = express();

var server = app.listen(8080, function(){
    console.log("Server, PORT:8080");
});

app.get("/", function(req, res, next){
    res.send("Hello World");
});