var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

module.exports = mongoose.model("Campground", campgroundSchema);
