var events = require('events');

// create an eventEmiter object
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
	console.log('connect success');

	eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
	console.log('data receivedi successfully');
});


eventEmitter.emit('connection')
console.log("Program Ended.");
