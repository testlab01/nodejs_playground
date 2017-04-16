var fs = require('fs');

fs.readFile('demo.txt', function(err, data){
	if(err) throw console.error(err);
	console.log(data.toString());
});

console.log('End of the Read');
