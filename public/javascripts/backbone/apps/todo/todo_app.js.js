// Generated by CoffeeScript 1.10.0
(function() {
  this.TODO.module("ToDoApp", function(ToDoApp, App, Backbone, Marionette, $, _) {
    var API;
    this.startWithParent = false;
    API = {
      listToDos: function() {
        return ToDoApp.List.Controller.listToDos();
      }
    };
    return ToDoApp.on("start", function() {
      return API.listToDos();
    });
  });

}).call(this);
