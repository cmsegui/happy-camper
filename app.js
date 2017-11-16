var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded ({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Victoria Bryant", image: "https://static.pexels.com/photos/45241/tent-camp-night-star-45241.jpeg"}, 
        {name: "Unicoi", image: "https://static.pexels.com/photos/176381/pexels-photo-176381.jpeg"},
        {name: "Tallulah Gorge", image: "https://static.pexels.com/photos/558454/pexels-photo-558454.jpeg"}
];
        
        

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = { name: name, image: image };
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});


app.get("/campgrounds/new", function(req, res) {
   res.render("new"); 
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is now running!");
});