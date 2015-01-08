var http = require("http");
var url = require("url");

var start = function(route, handle) {
	var onRequest = function(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname +  " recieved");
		route(handle, pathname, response, request);

	}
	
	http.createServer(onRequest).listen(8888);
	console.log("Server has Started");
}


exports.start = start;