var xor = require('../node_modules/bitwise-xor');
var fs = require('fs');

exports.readfile = function () {
    var lines = [];
    fs.readFile('/Users/nilssona/WebstormProjects/crypto/resources/4.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        lines = data.split(/\r?\n/);
        console.log(lines[1])
    });

    return lines;
};


exports.encryptRepeating = function (callback, path, key) {
    return {
        then: function (callback) {
            // read the file into an array
            encoded = [];

            fs.readFile(path, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                var splitKey = key.split('');
                var values = data.split('');

                var keyCode = splitKey.map(function (element) {
                    return parseInt(element.charCodeAt(0), 10).toString(16);
                })

                var bytes = values.map(function (element) {
                    return parseInt(element.charCodeAt(0), 10).toString(16);
                });

                var counter = 0;

                bytes.forEach(function(byte){
                    if(counter == 3){
                        counter =0;
                    }
                    var xored = xor(new Buffer(pad(byte,2), 'hex'), new Buffer(pad(keyCode[counter],2), 'hex'));

                    //console.log(xored.toString('hex'));
                    encoded.push(xored.toString('hex'));

                    counter++;
                });
                callback(encoded.join(''));
            });
        }
    }
}


exports.hex2bin = function (hex1, hex2) {
    var xored = xor(new Buffer(hex1, 'hex'), new Buffer(hex2, 'hex'));
    var hex = xored.toString('hex');
    return hex;
}



/**
 * Attempts to find a message hidden in the 4.txt file
 * The lines are encrypted with single character XOR.
 * @param callback
 * @param path
 * @returns {{then: Function}}
 */
exports.decryptHidden = function (callback, path, frequency_limit) {
    return {
        then: function (callback) {
            // read the file into an array
            fs.readFile(path, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                var lines = data.split(/\r?\n/);

                var output = [];
                // process all the lines from the file
                for (var l = 0; l < lines.length; l++) {

                    for (var data = 0; data < 127; data++) {
                        var key = String.fromCharCode(data);
                        var arr = decrypt(lines[l], key);

                        // calculate english language probability.
                        var frequency = calculateFrequency(arr);
                        if (frequency > frequency_limit) {
                            var temp = [];
                            arr.forEach(function (element) {
                                temp.push(String.fromCharCode(element));
                            });
                            output.push("key: " + key + "  freq:" + frequency + "   [" + temp.join('') + "]");
                        }
                    }

                }
                // we are done return the results
                callback(output);
            });

        }

    }

}

function calculateFrequency(text) {
    var freqs = {
        'a': 8.167,
        'b': 1.492,
        'c': 2.782,
        'd': 4.253,
        'e': 12.702,
        'f': 2.228,
        'g': 2.015,
        'h': 6.094,
        'i': 6.966,
        'j': 0.153,
        'k': 0.772,
        'l': 4.025,
        'm': 2.406,
        'n': 6.749,
        'o': 7.507,
        'p': 1.929,
        'q': 0.095,
        'r': 5.987,
        's': 6.327,
        't': 9.056,
        'u': 2.758,
        'v': 0.978,
        'w': 2.360,
        'x': 0.150,
        'y': 1.974,
        'z': 0.074
    };

    var count = 0;
    // add all these together and divide with number of characters to get the frequency %.
    text.forEach(function (element) {
        var c = String.fromCharCode(element).toLowerCase();
        if (freqs[c] != undefined) {
            var num = parseFloat(freqs[c]);
            count = count + num;
        }
    });

    return count / text.length;

}

function decrypt(hex, c) {
    var key = c.charCodeAt(0);
    hexNum = [];
    for (var i = 0; i < hex.length - 1; i += 2) {
        var xored = xor(new Buffer(hex.substr(i, 2), 'hex'), new Buffer(pad(key.toString(16), 2), 'hex'));
        hexNum.push(xored[0]);
    }

    return hexNum;
}


function makeChars(value) {
    return String.fromCharCode(value);
}


function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}







