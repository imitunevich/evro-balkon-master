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

app.listen(80, function () {
  console.log('Evrobalkon-master application started on port 8080');
});
