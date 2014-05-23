// web.js

// set up
var express     = require('express');
var http        = require('http');
var stylus      = require('stylus');
var mongoose    = require('mongoose');
var passport    = require('passport');
var flash       = require('connect-flash');

// load config and create database
var database    = require('./config/database');
mongoose.connect(database.url);

require('./config/passport.js')(passport);

// create and configure express app
var app = express();

app.configure(function() {
    app.use(express.cookieParser('secretpassauth'));
    app.use(express.bodyParser());
    app.use(express.session({ key: 'session', cookie: { maxAge: 60000 }}));
	  app.use(express.methodOverride());

    app.use(stylus.middleware(__dirname + '/static'));

    app.use("/css" , express.static(__dirname + '/static/css'));
    app.use("/js" , express.static(__dirname + '/static/js'));
    app.use("/fonts", express.static(__dirname + '/static/fonts'));

    app.set('views', __dirname + '/app/views');
    //app.engine('jade', require('jade').__express);
    app.set('view engine', 'ejs');
    app.set('port', process.env.PORT || 8080);

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(flash());
    app.use(app.router);
});

// load routes
require('./app/routes.js')(app, passport);

// For seeing changes without stoping, starting the server, install nodemon globally npm install -g nodemon. Start your server with nodemon server.js
http.createServer(app).listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});
