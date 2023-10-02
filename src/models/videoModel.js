const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    extension: {
        type: String,
        required: true,
    },
    sessionId: {
        type: String,
        required: true,
    }
},{
    versionKey: false
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
