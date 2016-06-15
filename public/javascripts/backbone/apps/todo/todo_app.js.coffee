@TODO.module "ToDoApp", (ToDoApp, App, Backbone, Marionette, $, _) ->
  @startWithParent = false

  #Controller View and templates for this app is located in folder "list"

  API =
    listToDos: ->
      ToDoApp.List.Controller.listToDos()

  ToDoApp.on "start", ->
    API.listToDos()