require('myModule');
console.log("Before loading 'hw'...");
hw = require('./hw') // myModule is loaded only once

var Jhon = new hw.User("Jhon");
Jhon.sayHello();
var Jane = new hw.User("Jane");
Jane.sayHello();

console.log(hw.magicNumber);

console.debug(require('myJSON'));
