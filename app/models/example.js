// app/models/example.js

var mongoose    = require('mongoose');
var user        = require('./user');

var exampleSchema = new mongoose.Schema({
    name    : String,
    mail    : String,
    user    : [{type : String, ref : 'User'}]
});

module.exports = mongoose.model('Example', exampleSchema);
