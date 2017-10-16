const express = require('express');

var app = express()

app.get('/', function (request, response) {
  response.send("<h1 style='text-align:center'>Hello gittestapp friends!!!</h1>");
})

app.listen(3000, function(error){
  if(error==true){
    console.log("error occured.");
  } else {
    console.log("listening to localhost:3000");
  }
})
