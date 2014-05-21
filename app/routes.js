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

    app.get('/login', function(req, res) {
      res.contentType('text/html');
      res.render('login', {message : req.flash('loginMessage')});
    });

    app.get('signup', function(req, res) {
      res.contentType('text/html');
      res.render('signup', {message : req.flash('signupMessage')});
    });

    app.get('/profile', isLoggedIn, function(req, res) {
      res.contentType('text/html');
      res.render('profile', {user : req.user});
    });

    app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
    });
};

var isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.redirect('/');
};
