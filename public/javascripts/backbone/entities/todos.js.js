// Generated by CoffeeScript 1.10.0
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.TODO.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
    var API;
    Entities.ToDo = (function(superClass) {
      extend(ToDo, superClass);

      function ToDo() {
        return ToDo.__super__.constructor.apply(this, arguments);
      }

      return ToDo;

    })(Entities.Model);
    Entities.ToDoCollection = (function(superClass) {
      extend(ToDoCollection, superClass);

      function ToDoCollection() {
        return ToDoCollection.__super__.constructor.apply(this, arguments);
      }

      ToDoCollection.prototype.model = Entities.ToDo;

      return ToDoCollection;

    })(Entities.Collection);
    API = {
      getToDos: function() {
        return new Entities.ToDoCollection([
          {
            title: "My First Note",
            content: "Lorem Ipsum"
          }, {
            title: "My second Note",
            content: "Lorem Ipsum"
          }, {
            title: "My third Note",
            content: "Lorem Ipsum"
          }
        ]);
      }
    };
    return App.reqres.setHandler("todo:entities", function() {
      return API.getToDos();
    });
  });

}).call(this);
