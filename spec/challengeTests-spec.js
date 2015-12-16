var xorIt = require("../app/XOR.js");
//var dupes = require("../app/duplicateLines.js");


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

/*
    it('should decrypt message encrypted with single character XOR', function(){
        xorIt.decryptHidden(this,'/Users/nilssona/WebstormProjects/crypto/resources/4.txt',4.6).then(function(output){
            console.log(output);
        })
    });
*/

    /**
     *
     * Implement repeating-key XOR
     * Here is the opening stanza of an important work of the English language:
     * Burning 'em, if you ain't quick and nimble
     * I go crazy when I hear a cymbal
     * Encrypt it, under the key "ICE", using repeating-key XOR.
     * In repeating-key XOR, you'll sequentially apply each byte of the key; the first byte of plaintext will be XOR'd against I, the next C, the next E, then I again for the 4th byte, and so on.
     * It should come out to:
     * 0b3637272a2b2e63622c2e69692a23693a2a3c6324202d623d63343c2a26226324272765272a282b2f20430a652e2c652a3124333a653e2b2027630c692b20283165286326302e27282f
     * Encrypt a bunch of stuff using your repeating-key XOR function. Encrypt your mail. Encrypt your password file. Your .sig file. Get a feel for it. I promise, we aren't wasting your time with this.
     */
    it('should encrypt a message using repeating-key XOR',function(){
        runs(function(){
            flag=false;
            output = "";
            xorIt.encryptRepeating(this,'/Users/nilssona/WebstormProjects/crypto/resources/5.txt','ICE').then(function(ret){
                flag=true;
                output = ret;
            });
        });

        waitsFor(function(){
            return flag;
        },"waiting for file read to complete",500);

        runs(function(){
            console.log(output);
            expect(output).toEqual("0b3637272a2b2e63622c2e69692a23693a2a3c6324202d623d63343c2a26226324272765272a282b2f20430a652e2c652a3124333a653e2b2027630c692b20283165286326302e27282f");
        });

    });




    //it('should encrypt a message using repeating-key XOR',function(){
    //        xorIt.encryptRepeating2(this,'/Users/nilssona/WebstormProjects/crypto/resources/5.txt','ICE').then(function(output){
    //        console.log("done "+ output);
    //    });
    //});


    //it('should decrypt message encrypted with single character XOR', function(){
    //    xorIt.justXor(this,'ICE').then(function(res){
    //        console.log(res);
    //        expect(res).toEqual("chuckle");
    //    })
    //});

    //it('should test invalid hex character', function(){
    //    xorIt.testLineFeed();
    //});


})


