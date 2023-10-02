const video = require("./videoModel")



exports.handleVideoUpload = async function (data){
    return await video.create({
        name: data.__filename,
        extension: data.extension,
        sessionId: data.sessionId
    })
}

exports.handleVideoEdit = async function (data){
    return video.findByIdAndUpdate(data.id, {
        name: data.name
    }, {new: false});
}

exports.handleFetchVideo = async function (data){
    return video.findById(data.id);
}

exports.handleFetchVideos = async function (){
    return video.find();
}

exports.handleDeleteVideo = async function (data){
    return video.findByIdAndDelete(data.id);
}
