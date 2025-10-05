require('myModule');

function User(name) {
    this.name = name;
    this.sayHello = () => {
        console.log("Hello, " + this.name + "!");
    }
}

var magicNumber = 42;

// When executed this module directly, rather than "require'd" by another module
if (!module.parent) {
    new User("Test").sayHello();
} else {
    global.hwUser = User; // !!! Bad practice, just for demo

    // exports.User = User;
    module.exports = { User, magicNumber }; // Alternative way to export

    // console.log(module)
}
