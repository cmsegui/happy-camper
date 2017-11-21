var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comments");

var data = [{
        name: "Red Rock",
        image: "https://static.pexels.com/photos/558454/pexels-photo-558454.jpeg",
        description: "Fire pits at each campsite and solar panels in the restrooms. Yay!"
    },
    {
        name: "Sweetwater Creek State Park",
        image: "https://static.pexels.com/photos/6714/light-forest-trees-morning.jpg",
        description: "Close to town, although you feel super secluded."
    },
    {
        name: "Anastasia State Park",
        image: "https://static.pexels.com/photos/6757/feet-morning-adventure-camping.jpg",
        description: "Beach camping at its finest!"
    }
];

function seedDB() {
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("removed campgrounds!");
        data.forEach(function(seed) {
            Campground.create(seed, function(err, campground) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("added a campground");
                    Comment.create({
                        text: "This place is awesome!",
                        author: "Stephen"
                    }, function(err, comment) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created new comment");
                        }
                    })
                }
            });
        });
    });
}

module.exports = seedDB;
