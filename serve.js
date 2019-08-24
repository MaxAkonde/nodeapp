var fs = require('fs');

fs.readdir('./', (error, files) => {
    if (error) {
        throw error;
    }
    console.log(files);
});

console.log('Read');