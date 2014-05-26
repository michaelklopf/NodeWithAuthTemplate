// app/routes/auth.js

module.exports = function(app, passport) {
  app.get('/login', function(req, res) {
    res.contentType('text/html');
    res.render('login', {message : req.flash('loginMessage')});
  });

  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile',
    failureRedirect : '/login',
    failureFlash : true
  }));

  app.get('/signup', function(req, res) {
    res.contentType('text/html');
    res.render('signup', {message : req.flash('signupMessage')});
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile',
    failureRedirect : '/signup',
    failureFlash : true
  }));

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
