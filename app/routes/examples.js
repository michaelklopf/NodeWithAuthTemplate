// app/routes/examples.js

// load models
var Example     = require('../models/example');
var mongoose    = require('mongoose');

module.exports = function(app) {

    // methods to manipulate data
    app.get('/examples', isLoggedIn, function(req, res) {
        return Example.find({user : req.user.local.email}, function(err, examples) {
            if(!err) {
                return res.send(examples);
            } else {
                return console.log(err);
            }
        });
    });

    app.post('/examples', isLoggedIn, function(req, res) {
        var example = new Example({
            name: req.body.name,
            mail: req.body.mail,
            user: req.user.local.email
        });
        example.save(function(err) {
            if (!err) {
                return console.log('created');
            } else {
                return console.log(err);
            }
        });
        return res.send(example);
    });

    app.get('/examples/:id', isLoggedIn, function(req, res) {
        return Example.findById({_id : mongoose.Types.ObjectId(req.params.id), user : req.user.local.email}, function(err, example) {
            if(!err) {
                return res.send(example);
            } else {
                return console.log(err);
            }
        });
    });

    app.put('/examples/:id', isLoggedIn, function(req, res) {
        console.log('Updating example ' + req.body.name);
        return Example.findById({_id : mongoose.Types.ObjectId(req.params.id), user : req.user.local.email}, function(err, example) {
            example.name = req.body.name;
            example.mail = req.body.mail;

            return example.save(function(err) {
                if(!err) {
                    console.log('example updated');
                } else {
                    console.log(err);
                }
            });
            return res.send(example);
        });
    });

    app.delete('/examples/:id', isLoggedIn, function(req, res) {
        console.log('Deleting example with id: ' + req.params.id);
        return Example.findById({_id : mongoose.Types.ObjectId(req.params.id), user : req.user.local.email}, function(err, example) {
            return example.remove(function(err) {
                if(!err) {
                    console.log('Example removed');
                    return res.send('');
                } else {
                    console.log(err);
                }
            });
        });
    });
}

var isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.redirect('/');
};
