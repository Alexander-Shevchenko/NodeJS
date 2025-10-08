var emt = new (require('events').EventEmitter)();

emt.prependListener('event', function withArgs(a, b, c) {
    console.log(`a=${a}, b=${b}, c=${c}`);
    console.log(`c.key = ${c.key}`);
});

emt.on('event', function withoutArgs() {
    console.log("No args, but they are here ;)");
    console.log(`Arguments length: ${arguments.length}`);
    for(let i=0; i<arguments.length; i++) {
        console.log(`  Argument ${i}: ${arguments[i]}`);
    }
});

emt.emit('event', 1, 'string', {key: 'value'});

