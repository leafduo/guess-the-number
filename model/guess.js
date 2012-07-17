var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;


var Guess = new Schema({
    _id: String,
    answer: Number,
    guesses: [Number],
    createdAt: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Guess', Guess);
