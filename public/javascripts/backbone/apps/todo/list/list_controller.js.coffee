@TODO.module "ToDoApp.List", (List, App, Backbone, Marionette, $, _) ->

  List.Controller =

    listToDos: ->

      #Fetch data. Currently static.
      links = App.reqres.request "todo:entities"

      #define views for Todos list and add new form
      todoView = @getToDoView links
      addTodoView = @getAddToDoView()

      #   Adding some event listeners   #

      # Expand/collapce one note
      todoView.on "childview:todo:toggleNote", (view, e)->
        view.$el.toggleClass('on')

      #mark note as read
      todoView.on "childview:todo:markRead", (view, e)->
        view.$el.toggleClass('read').removeClass('on')

      #delete current note
      todoView.on "childview:todo:markDelete", (view, e)->
        links.remove view.model.cid

      #show add new note form
      todoView.on "todo:addNote", (e)=>
        App.newRegion.show addTodoView

      #add new note to the list and hide form
      addTodoView.on "addtodo:new", (e)->
        _Data =
          title: addTodoView.ui.title.val()
          content: addTodoView.ui.content.val()
        links.push _Data unless _Data.title is ''
        App.newRegion.empty
          preventDestroy: true

      #Display the notes list
      App.mainRegion.show todoView


    getToDoView: (links) ->
      new List.ToDos
        collection: links

    getAddToDoView: ->
      new List.AddToDo