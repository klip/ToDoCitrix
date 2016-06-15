@TODO = do (Backbone, Marionette) ->
	
	App = new Marionette.Application

  #App uses two regions. One for displaying todo's and other for adding them
	App.addRegions
		mainRegion: "#main-region"
		newRegion: "#add-region"

	App.addInitializer ->
		App.module("ToDoApp").start() #module defined in public/javascripts/backbone/apps/todo/todo_app.js.coffee
	
	App.on "initialize:after", ->
		if Backbone.history
			Backbone.history.start()
	
	App

$ ->
  TODO.start()