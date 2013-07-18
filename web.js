var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs')
  , path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
  fs.readFile(__dirname + '/index.html', 'utf8', function (err, data) {
    if (err) throw err;
    //console.log(data);
    response.send(data);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});