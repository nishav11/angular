const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require("../models/video");

const db = "mongodb://nishav:nisha1308@ds157349.mlab.com:57349/videoplayer"
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
    if (err) {
        console.error("Error! " + err);
    }
});

router.get('/videos', function(req, res) {
    console.log("get request from all videos");
    Video.find({})
        .exec(function(err, videos) {
            if (err) {
                console.log("Error in Accecing the Videos")
            } else {
                res.json(videos);
            }
        });

});


module.exports = router;