const FileStream = require('./eventsFileStream');

var filePath = './sample.txt';
const fileStream = new FileStream(filePath);
fileStream.subscribeRead((path) => {
    console.log(`Read event received for path: ${path}`);
});
fileStream.subscribeWrite((path) => {
    console.log(`Write event received for path: ${path}`);
});

fileStream.readFile();
fileStream.writeFile();
