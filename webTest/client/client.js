var http = require('http');

var options = {host : 'localhost', port : '8088', path : '/index.html'};

var callback = function(response){
//	console.log(response);
	var body = '';
	response.on('data', function(data){
//		console.log(data);
		body += data;
	});

	response.on('end', function(){
		console.log(body)
	});
}



var req = http.request(options, callback);
req.end();
