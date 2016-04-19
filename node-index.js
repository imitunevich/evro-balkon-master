var shell = require('shelljs');
var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('../evro-balkon-master'));

app.get('/getAvailableExamples', function (req, res) {
  fs.readdir('images/examples', function(err, items) {
    res.setHeader('content-type', 'application/json');
    res.send(items);
  });
});

app.post('/updateCode', function (req, res) {
  shell.exec('git pull', {silent:false});
  res.send();
});

app.listen(80, function () {
  console.log('Evrobalkon-master application started on port 8080');
});
