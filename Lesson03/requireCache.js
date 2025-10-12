require('./cached');
console.log(require.cache);

console.log('Cur dir: ' + __dirname);
console.log('Cur full path: ' + __filename);
console.log('------------------------------------------');
console.dir(process, { depth: 10 });