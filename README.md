# ToDoCitrix
Coding test challenge for Citrix Germany

In order to run the app:


Nodejs required (I have used version 5.11.1)

Install dependencies: npm install

Install bower components: 
Go to /public/javascripts/
bower install

Run the server:
DEBUG=myapp:* npm start

The Js found in /public/javascripts

The app uses no backend for app logic at all
Right now some static first data is used that defined in /public/javascripts/backbone/entities/todos.js.coffee


I have used Coffeescript for precompiling JS, as it makes it more robust and solid. Although Sass was used for Css


I decided not to waste time on Grunt/Gulp, but to use NPM scripts only as it would take more time to configure them with Express.
