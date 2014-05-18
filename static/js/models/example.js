// static/js/models/example.js

var app = app || {};

app.Example = Backbone.Model.extend({
    idAttribute: '_id',
    
    defaults: {
        name: 'Example',
        mail: 'example@example.com'
    }
});
