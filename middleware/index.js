var Campground = require("../models/campground");
var Comment = require("../models/comments");


var middlewareObj = {};

middlewareObj.checkCampOwner = function(req, res, next) {
    if (req.isAuthenticated()) {
        Campground.findById(req.params.id, function(err, foundCampground) {
            if (err) {
                req.flash("error", "Campground not found.");
                res.redirect("back");
            }
            else {
                if (foundCampground.author.id.equals(req.user._id)) {
                    //used .equals bc it returns mongoose object id and i need to compare to a string
                    next();
                }
                else {
                    req.flash("error", "You are not authorized to do that.");
                    res.redirect("back");
                }
            }
        });
    }
    else {
        req.flash("error", "You must be logged in.");
        res.redirect("back");
    }
};



middlewareObj.checkCommentOwner = function(req, res, next) {
    if (req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function(err, foundComment) {
            if (err) {
                res.redirect("back");
            }
            else {
                if (foundComment.author.id.equals(req.user._id)) {
                    //used .equals bc it returns mongoose object id and i need to compare to a string
                    next();
                }
                else {
                    req.flash("error", "You are not authorized to do that.")
                    res.redirect("back");
                }
            }
        });
    }
    else {
        req.flash("error", "You must be logged in.");
        res.redirect("back");
    }
};


middlewareObj.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "You must be logged in.");
    res.redirect("/login");
};




module.exports = middlewareObj;
