var fs = require('fs');

fs.readdir('./', (error, files) => {
    if (error) {
        throw error;
    }
    files.forEach((fileName) => {
        fs.readFile(fileName, 'UTF-8', (error, content) => {
            console.log(`********* ${fileName} **********`);
            console.log(content);
        });
    });
});

console.log('Read');