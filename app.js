var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    var campgrounds = [
        {name: "Victoria Bryant", image: "https://static.pexels.com/photos/45241/tent-camp-night-star-45241.jpeg"}, 
        {name: "Unicoi", image: "https://static.pexels.com/photos/176381/pexels-photo-176381.jpeg"},
        {name: "Tallulah Gorge", image: "https://static.pexels.com/photos/558454/pexels-photo-558454.jpeg"}
        ]
        
        res.render("campgrounds", { campgrounds: campgrounds });
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is now running!");
});