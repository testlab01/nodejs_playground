var http = require('http');
var fs = require('fs');
var url = require('url');


// Create a server
http.createServer(function(request, response){
	//Parse the request containing file name
	var pathname = url.parse(request.url).pathname
		  
	//Parse the nameffo the file for which request is made
	console.log("Request for" + pathname + "received" + request);

	fs.readFile(pathname.substr(1), function(err, data){
		if(err) {
			console.log(err);
			response.writeHead(404, {'Coyyntent-Type' : 'text/html'});
		}else{ 
			response.writeHead(200, {'Coyyntent-Type' : 'text/html'});
			response.write(data.toString());
		};
		response.end();
	});	



}).listen(8088);

console.log("server running at http:");
