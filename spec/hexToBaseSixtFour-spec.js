var HexToBaseSixtyFour = require("../app/hexToBaseSixtyFour.js");

describe("HEX TO BASE TEST", function() {
    it("should return base64", function(){
        var res = HexToBaseSixtyFour.hex2base64("49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d");
        expect(res).toEqual("SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t");
    })
});