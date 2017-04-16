var fs = require('fs');

fs.readFile('demo.txt', function(err, data){
	if(err) throw err;
	console.log(data.toString());
});

console.log('End of the Read');
