var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/happy-camper", {useMongoClient: true});
app.use(bodyParser.urlencoded ({extended: true}));
app.set("view engine", "ejs");

var campgroundSchema = new mongoose.Schema({
    name: String, 
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({name: "Unicoi", 
//                   image: "https://static.pexels.com/photos/176381/pexels-photo-176381.jpeg"
// }, function(err, campground) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("New campground");
//         console.log(campground);
//     }
// });

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    Campground.find({}, function(err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds", { campgrounds: allCampgrounds });
        }
    });
});

app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = { name: name, image: image };
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    })
});


app.get("/campgrounds/new", function(req, res) {
   res.render("new"); 
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is now running!");
});