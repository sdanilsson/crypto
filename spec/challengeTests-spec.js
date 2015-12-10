var HexToBaseSixtyFour = require("../app/hexToBaseSixtyFour.js");
var xorIt = require("../app/XOR.js");
//var fs = require('fs');

describe("Challenge Tests", function () {
    /*
     it("should return base64", function(){
     var res = HexToBaseSixtyFour.hex2base64("49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d");
     expect(res).toEqual("SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t");
     })
     */

    /*
     it("should xor", function(){
     var res = xorIt.hex2bin("1c0111001f010100061a024b53535009181c","686974207468652062756c6c277320657965");
     console.log("result: "+ res);
     expect(res).toEqual("746865206b696420646f6e277420706c6179");
     })
     */

    /*
     it("should decrypt", function () {
     var res = xorIt.decrypt("1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736", 'X');
     console.log("result: " + res);
     })
     */
    /*
     it('should test xor', function (){
     var res = xorIt.test();
     console.log("returned: "+ res);
     })
     */
/*
    it('should read a file', function () {
        var lines = [];
        fs.readFile('/Users/nilssona/WebstormProjects/crypto/resources/4.txt', 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            lines = data.split(/\r?\n/);

            console.log(lines[0]);
        });
    });
*/

    it('should decrypt message encrypted with single character XOR', function(){
        xorIt.decryptHidden(this,'/Users/nilssona/WebstormProjects/crypto/resources/4.txt',4.6).then(function(output){
            console.log(output);
        })
    });


})


