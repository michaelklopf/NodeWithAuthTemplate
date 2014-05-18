// app/models/example.js

var mongoose    = require('mongoose');

var exampleSchema = new mongoose.Schema({
    name    : String,
    mail    : String
});

module.exports = mongoose.model('Example', exampleSchema);
