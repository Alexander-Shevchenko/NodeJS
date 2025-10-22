http = require('http');

const server = http.createServer((req, res) => {
    switch(req.method) {
        case 'GET':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello, this is a GET response!\n');
            break;
        case 'POST':
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ message: 'POST data received', data: body }));
            });
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
