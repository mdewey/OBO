
    
var UserModel = Backbone.Model.extend({
    
    
    
    defaults: {
        id: "",
        name: "",
        day: "",
        month: "",
        year: ""
    },
    
    initialize: function() {
//        console.log("UserModel Console")
    }
    
});

var user = new UserModel({
    id: 1,
    name: "Michael",
    day: 5,
    month: "June",
    year: 1980
});


var UserCollection = Backbone.Collection.extend({
    
    model: UserModel,
    initialize: function() {
        console.log(user.get("month"));
    },
    
});

var UserView = Backbone.View.extend({
    
    tagName: "div",
    el: "#user-container",
//    template: function() {
//    
//    },
    initialize: function() {
//        console.log("UserVIew render");
        this.render();
    },
    render: function() {
        
        var generateTemplate = _.template($("#templateName").html());
        var test = "";
        _.each([user], function(item) {
            console.log(item.attributes);
            console.log(item);
            test += generateTemplate(item.attributes);
        });
//        console.log(test);
        $(this.$el).html(test);
    },
    addUser: function() {
        
    }
    
});

var userview = new UserView({
    model: UserModel
});

var users = new UserCollection();