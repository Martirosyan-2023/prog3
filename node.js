// var os = require("os");

// var message = "The platform is ";

// function main(){

// console.log(message + os.platform());

// }

// main();

// var express = require("express");

// var app = express();

// app.get("/", function(req, res){

// res.send("Hello world");

// });

// app.listen(4000, function(){

// console.log("Example is running on port 3000");

// });

// var express = require("express");

// var app = express();

// app.get("/", function(req, res){

// res.send("<h1>Hello world</h1>");

// });

// app.get("/name/:name", function(req, res){

// var name = req.params.name;

// res.send("<h1>Hello " + name +"</h1>");

// });

// app.listen(3000, function(){

// console.log("Example is running on port 3000");

// });

// app.listen(4000, function(){

//     console.log("Example is running on port 3000");

//     });

var express = require("express");

var app = express();

app.get("/", function (req, res) {

    res.send("<h1>Hello world</h1>");

});

app.get("/name/:name", function (req, res) {

    var name = req.params.name;

    res.send("<h1>Hello " + name + "</h1>");

});

app.get("/google", function (req, res) {
    res.redirect('http://google.com');
});

app.get("/search/:searchvalue", function(req, res) {
    var searchValue = req.params.searchvalue;
    res.redirect("https://google.com/search?q=" + searchValue);
});



app.listen(3360, function () {

    console.log("Example is running on port 3330");

});

const fs = require('fs');

var obj = {
    "first_name": "Vardan",
    "last_name": "Hovsepyan",
    "age": 13,
    "tumo_student": true
};

fs.writeFileSync('obj.json', JSON.stringify(obj));