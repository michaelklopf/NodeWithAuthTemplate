// app/routes.js

// expose routes
module.exports = function(app, passport) {
    require('./routes/examples.js')(app);
    require('./routes/auth.js')(app, passport);

    // application routes
    app.get('/', function(req, res) {
      res.contentType('text/html');
      res.render('index', {user : req.user});
    });
};
