var fs = require('fs');

exports.parse = function (callback, path) {
    return {
        then: function (callback) {
            // read the file into an array
            fs.readFile(path, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                var lines = data.split(/\r?\n/);
                var obj = new Object();
                var lineCount = 0;
                lines.forEach(function (line) {
                    lineCount++;
                    if (obj.hasOwnProperty(line)) {
                        console.log("linenum:"+lineCount+" exists: " + line);
                    } else {
                        obj[line] = 0;
                    }

                });

                // we are done return the results
                callback(obj);
            });
        }
    }
}
