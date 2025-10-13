fs = require('fs');

class FileReader {
    constructor(filePath) {
        this.filePath = filePath;
    }

    readFile() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.filePath, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}

module.exports = FileReader;
