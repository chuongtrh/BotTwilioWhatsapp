require('dotenv').config()
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const commandService = require('./service/command.service');

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/incoming', commandService.validate, commandService.handle);

var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});

