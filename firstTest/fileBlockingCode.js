var fs = require('fs');

var data = fs.readFileSync('demo.txt');

console.log(data.toString());
console.log("End of the Read");
