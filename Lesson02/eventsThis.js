var emt = new (require('events').EventEmitter)();

emt.prependListener('event', function withArgs(a, b, c) {
    console.log('Classic function this:');
    console.log(this);
});

emt.on('event', () => {
    console.log('Arrow function this:');
    console.log(this);
});

emt.emit('event', 1, 'string', {key: 'value'});

exports.any = 42; // to make this file a module

emt.emit('event', 1, 'string', {key: 'value'});

emt.listeners('event').forEach((listener, index) => {
    console.log(`Listener ${index}: ${listener.name || 'anonymous: ' + listener.toString()}`);
});
