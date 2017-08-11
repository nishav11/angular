const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Video = require('../models/video');

const db = "mongodb://nishav:nisha1308@ds157349.mlab.com:57349/videoplayer"
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
    if (err) {
        console.error("Error! " + err);
    } else {
        console.log('Connected to DB ' + db);
    }
});

router.get('/videos', function(req, res) {

    console.log('get request from all videos');
    Video.find({}).exec(function(err, videos) {
        if (err) {
            console.log('Error in Accecing the Videos');
        } else {
            res.json(videos);
        }
    });

});
router.get('/videos/:id', function(req, res) {

    console.log('get request from a video');
    Video.findById(req.params.id).exec(function(err, video) {
        if (err) {
            console.log('Error in Accecing the Video');
        } else {
            res.json(video);
        }
    });

});

router.post('/videos', function(req, res) {
    console.log('Post a Video');
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err, insertedVideo) {
        if (err) {
            console.log("Erroe inserting Video");
        } else {
            res.json(insertedVideo);
        }
    });
});

router.put('/video/:id', function(req, res) {
    console.log("Update a Video");
    Video.findByIdAndUpdate(req.params.id, {
            $set: { title: req.body.title, url: req.body.url, description: req.body.description }
        }, {
            new: true
        },
        function(err, updatedVideo) {
            if (err) {
                res.send("Error! Could not Update Video");
            } else {
                res.json(updatedVideo);
            }
        }
    );


});

router.delete('/video/:id', function(req, res) {
    console.log('Remove a Video');

    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo) {
        if (err) {
            res.send('Error Removing the Video!');
        } else {
            res.json(deletedVideo);
        }
    });
});


module.exports = router;