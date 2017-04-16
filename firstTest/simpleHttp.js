var http = require('http');

var onRequest = function(request, response){
	var url = request.url;
	console.log("request url is " + url);
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.write('Hello Tomba \n');
	response.end('Welcome to Node.js');
}


http.createServer(onRequest).listen(8082);
console.log('Server is running...');
