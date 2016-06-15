@TODO.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->
	
	class Entities.ToDo extends Entities.Model
	
	class Entities.ToDoCollection extends Entities.Collection
		model: Entities.ToDo
	
	API =
		getToDos: ->
			new Entities.ToDoCollection [
				{ title:"My First Note",content: "Lorem Ipsum" }
        { title:"My second Note",content: "Lorem Ipsum" }
        { title:"My third Note",content: "Lorem Ipsum" }
			]
	
	App.reqres.setHandler "todo:entities", ->
		API.getToDos()