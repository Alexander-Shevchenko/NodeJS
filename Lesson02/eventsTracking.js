var emt = new (require('events').EventEmitter)();

emt.on('newListener', (event, listener) => {
    if (event === 'myEvent') {
        console.log(`A new listener "${listener.name || 'anonymous'}" was added for event: ${event}`);
    }
});

emt.on('removeListener', (event, listener) => {
    if (event === 'myEvent') {
        console.log(`A listener "${listener.name || 'anonymous'}" was removed from event: ${event}`);
    }
});

function myEventListener() {
    console.log("myEvent triggered");
}

emt.on('myEvent', myEventListener);
emt.emit('myEvent');

// emt.removeListener('myEvent', myEventListener);
emt.removeAllListeners('myEvent');
emt.emit('myEvent');