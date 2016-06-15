// Generated by CoffeeScript 1.10.0
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.TODO.module("ToDoApp.List", function(List, App, Backbone, Marionette, $, _) {
    List.AddToDo = (function(superClass) {
      extend(AddToDo, superClass);

      function AddToDo() {
        return AddToDo.__super__.constructor.apply(this, arguments);
      }

      AddToDo.prototype.template = "todo/list/templates/_addtodo.ejs";

      AddToDo.prototype.tagName = "div";

      AddToDo.prototype.ui = {
        form: "form",
        title: "input[name='title']",
        content: "input[name='content']",
        sbmt: "button"
      };

      AddToDo.prototype.events = {
        "submit @ui.form": "formSubmit"
      };

      AddToDo.prototype.formSubmit = function(e) {
        e.preventDefault();
        return this.trigger("addtodo:new", e);
      };

      return AddToDo;

    })(Marionette.ItemView);
    List.ToDo = (function(superClass) {
      extend(ToDo, superClass);

      function ToDo() {
        return ToDo.__super__.constructor.apply(this, arguments);
      }

      ToDo.prototype.template = "todo/list/templates/_todo.ejs";

      ToDo.prototype.tagName = "li";

      ToDo.prototype.ui = {
        title: "h3",
        markRead: ".mark-read",
        markDelete: ".mark-delete"
      };

      ToDo.prototype.events = {
        "click @ui.title": "toggleNote",
        "click @ui.markRead": "markRead",
        "click @ui.markDelete": "markDelete"
      };

      ToDo.prototype.toggleNote = function(e) {
        return this.trigger("todo:toggleNote", e);
      };

      ToDo.prototype.markRead = function(e) {
        return this.trigger("todo:markRead", e);
      };

      ToDo.prototype.markDelete = function(e) {
        return this.trigger("todo:markDelete", e);
      };

      return ToDo;

    })(Marionette.ItemView);
    return List.ToDos = (function(superClass) {
      extend(ToDos, superClass);

      function ToDos() {
        return ToDos.__super__.constructor.apply(this, arguments);
      }

      ToDos.prototype.template = "todo/list/templates/todos.ejs";

      ToDos.prototype.childView = List.ToDo;

      ToDos.prototype.childViewContainer = "ul#todos";

      ToDos.prototype.ui = {
        addNote: "a#add-todo"
      };

      ToDos.prototype.events = {
        "click @ui.addNote": "addNote"
      };

      ToDos.prototype.addNote = function(e) {
        return this.trigger("todo:addNote", e);
      };

      return ToDos;

    })(Marionette.CompositeView);
  });

}).call(this);
