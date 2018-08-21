var exec = require('cordova/exec');

module.exports = {
	playVideoMethod: function (video, onSuccess, onError) {
        exec(onSuccess, onError, "PlayVideo", "playVideoMethod", [video]);
    }
}