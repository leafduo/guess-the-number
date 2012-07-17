
/*
 * GET home page.
 */


var uuid = require('node-uuid')
  , mongoose = require('mongoose')
  , Guess = require('../model/guess.js');

exports.getToken = function(req, res){
    var token = uuid.v4();
    var answer = Math.floor(Math.random() * 100) + 1;
    new Guess({_id: token, answer: answer}).save();
    res.json({token: token, answer: answer});
};

exports.guess = function(req, res){
    Guess.findOne({_id: req.params.id}, function(err, guess){
        var comp;
        if (req.params.guess > guess.answer) {
            comp = 'bigger';
        } else if (req.params.guess < guess.answer) {
            comp = 'smaller';
        } else {
            comp = 'equal';
        }
        res.json({comp: comp});
        guess.guesses.push(req.params.guess);
        guess.save();
    })
};
