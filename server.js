var express = require('express');
var app = express();
var index = require('./routes/index');
// var students = require('./routes/students');



app.use(express.static('public'));
app.use('/', index);
// app.use('/students', students);

app.get('/students', function(request, response){
  var students = ["Andrew Kolander", "Anthony Maki", "Brian Anderson", "Brian Verduzco", "Connor O'Gara", "Cormac Strahan", "Donovan Goertzen", "Hillary Manning", "Jon Wilson", "Justin Doty", "Katie Vogel", "Kyle Quamme", "Liz Kerber", "Megan Martinson", "Richard Camara", "Ryan Mattson", "Sahasha Reese", "Tracy Vincent", "Trent Johnson"];
  response.send(students);
});



var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
  console.log('Press Ctrl-c to quit.');
});
