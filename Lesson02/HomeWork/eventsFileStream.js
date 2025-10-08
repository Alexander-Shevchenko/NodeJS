evts = require('events')

class FileStream extends evts.EventEmitter {
    constructor(path) {
        super();
        this.path = path;
        this.READEVENT = 'readFile';
        this.WRITEEVENT = 'writeFile';
    }

    subscribeRead(listener) {
        this.on(this.READEVENT, listener);
    }

    readFile() {
        console.log(`Reading file from path: ${this.path}`);
        this.emit(this.READEVENT, this.path);
    }

    subscribeWrite(listener) {
        this.on(this.WRITEEVENT, listener);
    }

    writeFile() {
        console.log(`Writing file to path: ${this.path}`);
        this.emit(this.WRITEEVENT, this.path);
    }
}

module.exports = FileStream;