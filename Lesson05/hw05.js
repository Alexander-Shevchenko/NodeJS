// 1. Use express to create a web server that serves static HTMLs with Styles

var path = require('path');
var express = require('express');
var app = express();

var html_dir = 'html';

app.use('/', express.static(path.join(__dirname, html_dir)) );

app.get('/', (req, res) => {
    res.redirect('/dark.html');
});

app.post('/login', express.urlencoded({ extended: true }), (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    console.log(`Received login attempt: ${username} / ${password}`);

    res.send(`Login successful as ${username}\n`);
});

app.listen(8080);

console.log('Server is listening on port 8080');
