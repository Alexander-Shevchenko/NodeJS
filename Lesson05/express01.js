// >node install express

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello, World!');
});

app.get(/^\/about(.*)?$/, function(req, res) {
    res.send('It\'s a page starting with "about"');
});

app.listen(8080, function() {
    console.log('Server is listening on port 8080');
});