@TODO.module "ToDoApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.AddToDo extends Marionette.ItemView
    template: "todo/list/templates/_addtodo.ejs"
    tagName: "div"
    ui:
      form: "form"
      title: "input[name='title']"
      content: "input[name='content']"
      sbmt: "button"
    events:
      "submit @ui.form": "formSubmit"
    formSubmit: (e)->
      e.preventDefault()
      @trigger "addtodo:new", e

  class List.ToDo extends Marionette.ItemView
    template: "todo/list/templates/_todo.ejs"
    tagName: "li"
    ui:
      title: "h3"
      markRead: ".mark-read"
      markDelete: ".mark-delete"
    events:
      "click @ui.title": "toggleNote"
      "click @ui.markRead": "markRead"
      "click @ui.markDelete": "markDelete"
    toggleNote: (e)->
      @trigger "todo:toggleNote", e
    markRead: (e)->
      @trigger "todo:markRead", e
    markDelete: (e)->
      @trigger "todo:markDelete", e



  class List.ToDos extends Marionette.CompositeView
    template: "todo/list/templates/todos.ejs"
    childView: List.ToDo
    childViewContainer: "ul#todos"
    ui:
      addNote: "a#add-todo"
    events:
      "click @ui.addNote": "addNote"
    addNote: (e)->
      @trigger "todo:addNote", e