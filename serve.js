var fs = require('fs');
var https = require('https');

var options = {
    hostname: 'fr.wikipedia.org',
    port: 443,
    path: '/wiki/Node.js',
    method: 'GET'
}

var req = https.request(options, (res) => {
    var responseBody = '';

    console.log('Start !\n');
    console.log(res.statusCode);
    console.log(res.headers);

    res.setEncoding('UTF-8');

    res.on('data', (chunk) => {
        console.log(chunk.length);
        responseBody += chunk;
    });

    res.on('end', () => {
        //console.log(responseBody);
        fs.writeFile('nodejs.html', responseBody, () => {
            console.log('Fichier crée !');
        });
    });
});

req.end();