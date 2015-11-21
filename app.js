var express = require("express");
var app = express();

app.listen(3700);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html"); 
});

app.use(express.static(__dirname + '/public'));
