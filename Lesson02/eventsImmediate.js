var emt = new (require('events').EventEmitter)();

function immediateListener() {
    setImmediate(() => {
        console.log("Immediate 1");
    });
}
emt.on('event', immediateListener);

emt.on('event', () => {
    console.log("Synchronous event handler");
});

emt.on('event', () => {
    setImmediate(() => {
        console.log("Immediate 2");
    });
});

emt.emit('event');

emt.removeListener('event', immediateListener)
console.log("Removed immediateListener");
emt.emit('event');

emt.removeAllListeners('event');
console.log("Removed all listeners");
emt.emit('event'); // No listeners