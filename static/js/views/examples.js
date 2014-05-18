// static/js/views/examples.js

var app = app || {};

app.ExamplesView = Backbone.View.extend({
    el: $('#examples'),
    
    initialize: function(initialExamples) {
        this.collection = new app.Examples();
        this.collection.fetch({reset:true});
        this.render();
        
        this.listenTo(this.collection, 'add', this.renderExample);
        this.listenTo(this.collection, 'reset', this.render);
    },
    
    events: {
        'click #add': 'addExample'
    },
    
    addExample: function(e) {
        e.preventDefault();
        
        var formData = {};
        
        $('#addExample div').children('input').each(function(i, el) {
            if($(el).val() != "") {
                formData[el.id] = $(el).val();
            }
        });
        
        //this.collection.add(new app.Example(formData));
        this.collection.create(formData);
    },
    
    // render examples by rendering each example in its collection
    render: function() {
        this.collection.each(function(item) {
            this.renderExample(item);
        }, this );
    },
    
    // render an example by creating an ExampleView and appending the
    // element it renders to the examples collections element
    renderExample: function(item) {
        var exampleView = new app.ExampleView({
            model: item
        });
        
        this.$el.append(exampleView.render().el);
    }
    
});
