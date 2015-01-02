var start = function() {
	console.log("Request Handler Start was called");
}

var upload = function() {
	console.log("Request Handler Upload was called");
}

exports.start = start;
exports.upload = upload;