var fs = require('fs');

var config = {
    debugMode: true,
}

resetConfig = () => {
    fs.readFile('./TestConfig.js', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }

        var newValue = data.replace(/debugMode: .*?,/g, 'debugMode: true,');

        fs.writeFile('./TestConfig.js', newValue, 'utf-8', (err) => {
            if (err) throw err;
            console.log('file change complete');
        });

    })
}

resetConfig()
