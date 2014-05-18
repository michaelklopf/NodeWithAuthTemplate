Advanced Node.js template for starting a node webproject faster.
Overview
===
The template makes use of the following technologies:

express - web application framework for nod http://expressjs.com

mongoose - modeling application data with MongoDB http://mongoosejs.com

jade - template engine, easier and more convenient than writing html http://jade-lang.com

stylus - for dynamic and faster writing of CSS http://learnboost.github.io/stylus/

grunt - for automation tasks revolving around npm and node (back-end side of things) http://gruntjs.com

bower - not really part of the template per se, as I copied my content from an old project, but I will try updating this part. It automates management of front-end packages like jQuery or Bootstrap http://bower.io

Bootstrap - front-end framework for easier and faster web development. Comes with a lot of web site elements, already styled, like buttons or sliders. Responsiveness is an elemental feature http://getbootstrap.com

Backbone - front-end JavaScript framework. Helps to structure code in models and views. The latter includes the controller functionality of the MVC pattern.

restler - Library to consume other web APIs. https://github.com/danwrong/restler

passport - Authentification library. http://passportjs.org/
Tutorial: http://scotch.io/tutorials/javascript/easy-node-authentication-setup-and-local

About testing:
Jasmine - Testing framework (not yet implemented) description here http://blog.codeship.io/2013/08/20/testing-tuesday-19-how-to-test-node-js-applications-with-jasmine.html

http://thewayofcode.wordpress.com/2013/04/21/how-to-build-and-test-rest-api-with-nodejs-express-mocha/

Background
===
You will find an article describing how to use module.exports here http://openmymind.net/2012/2/3/Node-Require-and-Exports/

I took the main structure of this app from here http://scotch.io/tutorials/javascript/node-and-angular-to-do-app-application-organization-and-structure

A nice tutorial for MongoDB, in relation to express and mongoose
http://theholmesoffice.com/node-js-express-and-mongoose/
Getting started

The book on which I based the Backbone structure
http://addyosmani.github.io/backbone-fundamentals

Set-Up
===
As with the starter template we set up node and load the necessary modules.

For our data, we use MongoDB in this template. Other database types are possible too, but need to be configured differently, for this please look into the documentation. My bitstarter repository is based on PostgreSQL and you can take clues from there, but the setup is complexer, hence why I decided to use MongoDB here.

Install MongoDB
```brew install mongodb```

Run MongoDB in its own Terminal tab with
```mongod ```

If this does not work, make a folder where the database should reside, and execute the command
```mongod --dbpath ~/your/mongodbs/```

After that you can start the web application with
```node web.js```

What happens here
===
Instead of cluttering the web.js (also known as app.js or server.js), we separate the configuration for the start of the server from the routes and database configuration. That enables us to easier maintain the code. All back-end related code is saved in the app folder.

The Backbone part works in similar ways. The code is divided between collections, models, and views. The entry point is called app.js, all the Backbone code is found in the js folder of the static (or public) content.

In routes.js we created a REST API to operate on the database, which is called by our front-end code.

examples.js is the name of the collection, which holds all the example.js objects. An example holds a name and a mail. These are saved in the database as is.

To do
===
The next step is to make use of MarionetteJS and discover more Backbone features. On the backend side, we need to structure the routes better, to prevent the routes.js from growing too large.

Before that we add passport for authentification. I'm also trying to add Jasmin for testing.
