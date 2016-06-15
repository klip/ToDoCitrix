Backbone.Marionette.Renderer.render = (template, data) ->
	#path = JST["backbone/apps/" + template]
	path = new EJS {
    url: "/javascripts/backbone/apps/" + template
  }
	unless path
		throw "Template #{template} not found!"
	path.render(data)