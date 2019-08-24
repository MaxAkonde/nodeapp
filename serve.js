var exec = require('child_process').exec;

exec('ls', function(error, stdout) {
    if (error) {
        throw error;
    }

    console.log('Listen finished');
    console.log(stdout);
});