// static/js/views/example.js

var app = app || {};

app.ExampleView = Backbone.View.extend({
    tagName: 'div',
    className: 'exampleContainer',
    template: $('#exampleTemplate').html(),
    
    events: {
        'click .delete': 'deleteExample'
    },
    
    deleteExample: function() {
        this.model.destroy();
        
        this.remove();
    },
    
    render: function() {
        // this.$el is defined in tagName. use $el to get access to jQuery html() function.
        //this.$el.html(this.template(this.model.toJSON()));
        
        var tmpl = _.template(this.template);
        this.$el.html(tmpl(this.model.toJSON()));
        
        return this;
    }
});
