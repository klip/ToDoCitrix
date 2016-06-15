// Generated by CoffeeScript 1.9.3
(function() {
  this.TODO.module("ToDoApp.List", function(List, App, Backbone, Marionette, $, _) {
    return List.Controller = {
      listToDos: function() {
        var addTodoView, links, todoView;
        links = App.reqres.request("todo:entities");
        todoView = this.getToDoView(links);
        addTodoView = this.getAddToDoView();
        todoView.on("childview:todo:toggleNote", function(view, e) {
          return view.$el.toggleClass('on');
        });
        todoView.on("childview:todo:markRead", function(view, e) {
          return view.$el.toggleClass('read').removeClass('on');
        });
        todoView.on("childview:todo:markDelete", function(view, e) {
          return links.remove(view.model.cid);
        });
        todoView.on("todo:addNote", (function(_this) {
          return function(e) {
            return App.newRegion.show(addTodoView);
          };
        })(this));
        addTodoView.on("addtodo:new", function(e) {
          var _Data;
          _Data = {
            title: addTodoView.ui.title.val(),
            content: addTodoView.ui.content.val()
          };
          if (_Data.title !== '') {
            links.push(_Data);
          }
          return App.newRegion.empty({
            preventDestroy: true
          });
        });
        return App.mainRegion.show(todoView);
      },
      getToDoView: function(links) {
        return new List.ToDos({
          collection: links
        });
      },
      getAddToDoView: function() {
        return new List.AddToDo;
      }
    };
  });

}).call(this);

//# sourceMappingURL=list_controller.js.js.map