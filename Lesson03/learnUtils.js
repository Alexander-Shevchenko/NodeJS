console.time('lesson03');

var util = require('util');

class Base {
    constructor() {
        this.name = 'Base';
    }

    sayHello() {
        console.log(util.format('Hello, I am %s', this.name));
    };
}

// Add deprecated sayHi() method
Base.prototype.sayHi = util.deprecate(
    function() {
            this.sayHello();
        },
    'Use sayHello() instead');

var base = new Base();
base.sayHello();

function Derived() {
    this.name = 'Derived';
}

util.inherits(Derived, Base);

var derived = new Derived();
derived.sayHi();

//--- Modern ES6+ syntax ---
class ModernDerived extends Base {
    constructor() {
        super();
        this.name = 'ModernDerived';
    }
}

var modernDerived = new ModernDerived();
modernDerived.sayHello();

console.log(util.inspect(base)); // when just log() does not work (say, in Debug console)
console.log(modernDerived);

if (util.isFunction(derived.sayHi)) {
    console.log('derived.sayHi is a function');
}

/*
console.log('------------------------------------------');
console.log('Process env:');
console.log('------------------------------------------');
console.log(utils.format('%j', process.env));
console.log('------------------------------------------');
console.log('Process inspect:');
console.log('------------------------------------------');
console.log(utils.inspect(process));
console.log('------------------------------------------');
*/

console.timeEnd('lesson03');