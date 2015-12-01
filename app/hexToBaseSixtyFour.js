exports.hex2base64 = function(hex){
    //console.log(new Buffer(hex).toString('base64'));
    return new Buffer(hex, 'hex').toString('base64');
}
