// app/routes.js

// expose routes
module.exports = function(app, passport) {
    require('./routes/examples.js')(app);

    // application routes
    app.get('/', function(req, res) {
        //var data = jade.renderFile('./static/index.jade');
        res.contentType('text/html');
        //res.send(200, data);
        res.render('index');
    });
};
