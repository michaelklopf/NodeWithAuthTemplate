// static/js/collections/examples.js
var app = app || {};

app.Examples = Backbone.Collection.extend({
    model : app.Example,
    url: '/examples'
});
