'use strict';
var express = require('express');
var fs = require('fs');
var app = express();

app.set('port', process.env.PORT || 8080);

app.get('/:username', function(req, res) {
  var user = req.params.username;
  var filename = user.concat('.json');
  var filepath = __dirname + '/data/' + filename;

  res.sendFile(filepath);
});

app.post('/:username', function(req, res) {
  var user = req.params.username;
  var data = ('{\r\n  "name": ' + '"' + user + '"\r\n}');
  var filename = user.concat('.json');
  var filepath = __dirname + '/data/' + filename;

  fs.writeFile(filepath, data, function(err) {
    if (err) { throw err; }
    console.log('A new user has been saved!');
  });
  res.json({msg: 'New User Saved!'});
});

app.listen(app.get('port'), function() {
  console.log('server running on port: %d', app.get('port'));
});
