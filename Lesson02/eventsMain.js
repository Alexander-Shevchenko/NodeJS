var events = require('events');
var eventEmitter = new events.EventEmitter();

var testHandler = function tested() {
    console.log('Tested!');
}
var singleHandler = function single() {
    console.log('Only called once.');
}

console.log("Before event listener.");

eventEmitter.on('test', testHandler);
eventEmitter.once('once', singleHandler);

console.log("After event listener.");

eventEmitter.emit('test');
eventEmitter.emit('once');
eventEmitter.emit('test');
eventEmitter.emit('once');

console.log("Program Ended.");

