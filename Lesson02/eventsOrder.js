var emt = new (require('events').EventEmitter)();

function immediateListener() {
    setImmediate(() => {
        console.log("Immediate 2");
    });
}
emt.on('event', immediateListener);

emt.prependListener('event', () => {
    setImmediate(() => {
        console.log("Immediate 1");
    });
});

emt.emit('event');
emt.emit('event');

emt.once('event', () => {
    console.log("Once listener 2");
});

emt.prependOnceListener('event', () => {
    console.log("Once listener 1");
});
emt.emit('event');
emt.emit('event');

 // No listeners