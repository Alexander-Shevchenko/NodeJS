fs = require('fs');
fs.writeFileSync('.txt', 'Hello, NodeJS');
var content = fs.readFileSync('.txt', 'utf8');
console.log(content);


const sleep = (nSeconds) => {
    // Multiply by 1000 to convert seconds to milliseconds
    const milliseconds = nSeconds * 1000;
    
    // Return a Promise that uses setTimeout to resolve after the delay
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

// Async read
fs.stat('.txt', function(err, stats) {
    if (err) {
        console.log('Error reading stats: ' + err);
        return;
    }

    if (stats.isFile() && stats.size > 0) {
        arr = new Uint16Array(stats.size);
        buf = Buffer.from(arr);
        fs.open('.txt', 'r', function(err, fd) {
            if (err) {
                console.log('Error opening file: ' + err);
                return;
            }

            fs.read(fd, buf, 0, stats.size, 0, function(err, bytesRead, buffer) {
                if (err) {
                    console.log('Error reading file: ' + err);
                    return;
                }
                
                console.log('Bytes read: ' + bytesRead);
                console.log(buffer.toString('utf8', 0, bytesRead));
                fs.close(fd, function(err) {
                    if (err) {
                        console.log('Error closing file: ' + err);
                    }
                });
            });
        });
    }
});

// Executed earlier than async read
console.log('Done, but not yet ;)');

fs.writeFile('.async.txt', 'Hello, NodeJS async!', function(err) {
    if (err) {
        console.log('Error writing file: ' + err);
        return;
    }
    console.log('File written successfully');

    // Read the file after writing
    fs.readFile('.async.txt', 'utf8', function(err, data) {
        if (err) {
            console.log('Error reading file: ' + err);
            return;
        }
        console.log('File content: ' + data);
    });
});