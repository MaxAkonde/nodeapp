var fs = require('fs');

var stream = fs.createReadStream('lib/lambda.js', 'UTF-8');

stream.once('data', () => {
    console.log('Start !\n');
});

stream.on('data', (chunk) => {
    process.stdout.write(`chunk : ${chunk.length}\n`);
});

stream.on('end', () => {
    console.log('End !\n');
});