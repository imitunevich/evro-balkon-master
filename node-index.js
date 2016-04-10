var express = require('express');
var app = express();

app.use(express.static('../evro-balkon-master'));

app.get('/getAvailableExamples', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Evrobalkon-master application started on port 8080');
});
