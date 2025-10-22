const path = require('path');
const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    switch(req.method) {
        case 'GET':
            html = path.join(__dirname, 'login.html');
            fs.readFile(html, (err, data) => {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('Internal Server Error\n');
                } else {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(data);
                }
            });
            break;
        case 'POST':
            if (req.url === '/login') {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {
                    const parsedBody = new URLSearchParams(body);
                    const username = parsedBody.get('username');
                    const password = parsedBody.get('password');

                    console.log(`Received login attempt: ${username} / ${password}`);

                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.end(`Login successful as ${username}\n`);
                });
            } else {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('Not Found\n');
            }
            break;
        default:
            res.writeHead(405, {'Content-Type': 'text/plain'});
            res.end('Method Not Allowed\n');
        }
    }
);

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
