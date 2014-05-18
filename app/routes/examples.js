// app/routes/examples.js

// load models
var Example     = require('../models/example');

module.exports = function(app) {
    
    // methods to manipulate data
    app.get('/examples', function(req, res) {
        return Example.find(function(err, examples) {
            if(!err) {
                return res.send(examples);
            } else {
                return console.log(err);
            }
        });
    });
    
    app.post('/examples', function(req, res) {
        var example = new Example({
            name: req.body.name,
            mail: req.body.mail
        });
        example.save(function(err) {
            if (!err) {
                return console.log('created');
            } else {
                return consoel.log(err);
            }
        });
        return res.send(example);
    });
    
    app.get('/examples/:id', function(req, res) {
        return Example.findById(req.params.id, function(err, example) {
            if(!err) {
                return res.send(example);
            } else {
                return console.log(err);
            }
        });
    });
        
    app.put('/examples/:id', function(req, res) {
        console.log('Updating example ' + req.body.name);
        return Example.findById(req.params.id, function(err, example) {
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
        
    app.delete('/examples/:id', function(req, res) {
        console.log('Deleting example with id: ' + req.params.id);
        return Example.findById(req.params.id, function(err, example) {
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
