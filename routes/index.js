
/*
 * GET home page.
 */

var uuid = require('node-uuid');

exports.getToken = function(req, res){
    var token = uuid.v4();
    var randomNumber = Math.floor(Math.random() * 100);
    res.send({token: token, randomNumber: randomNumber});
};
