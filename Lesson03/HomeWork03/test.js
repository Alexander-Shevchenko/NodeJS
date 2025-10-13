var fr = require('lxnpmfr');
var path = require('path');

const filePath = `${__dirname}/test.txt`;
console.log('Reading file:', path.resolve(filePath));
const fileReader = new fr(filePath);

fileReader.readFile()
    .then(data => {
        console.log('___File content___');
        console.log(data);
        console.log('__________________');
    })
    .catch(err => {
        console.error('Error reading file:', err);
    });
