var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comments");

var data = [{
        name: "Red Rock Campgrounds",
        image: "https://static.pexels.com/photos/558454/pexels-photo-558454.jpeg",
        description: "Lorem ipsum dolor amet ugh jean shorts pok pok selvage vape wolf. Keffiyeh meggings bicycle rights, iPhone trust fund marfa yuccie venmo intelligentsia. Gastropub leggings bushwick you probably haven't heard of them tofu. Ennui succulents narwhal, poutine chambray activated charcoal lo-fi cloud bread coloring book tousled."
    },
    {
        name: "Sweetwater Creek State Park",
        image: "https://static.pexels.com/photos/6714/light-forest-trees-morning.jpg",
        description: "Lorem ipsum dolor amet ugh jean shorts pok pok selvage vape wolf. Keffiyeh meggings bicycle rights, iPhone trust fund marfa yuccie venmo intelligentsia. Gastropub leggings bushwick you probably haven't heard of them tofu. Ennui succulents narwhal, poutine chambray activated charcoal lo-fi cloud bread coloring book tousled."
    },
    {
        name: "Anastasia State Park",
        image: "https://static.pexels.com/photos/6757/feet-morning-adventure-camping.jpg",
        description: "Lorem ipsum dolor amet ugh jean shorts pok pok selvage vape wolf. Keffiyeh meggings bicycle rights, iPhone trust fund marfa yuccie venmo intelligentsia. Gastropub leggings bushwick you probably haven't heard of them tofu. Ennui succulents narwhal, poutine chambray activated charcoal lo-fi cloud bread coloring book tousled."
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
