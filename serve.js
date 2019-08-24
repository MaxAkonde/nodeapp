var fs = require('fs');

if (fs.existsSync('lib')) {
    console.log('Dir exist');
} else {
    fs.mkdir('lib', (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Dir created');
        }
    });
}