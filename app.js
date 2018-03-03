//import modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//port no
const port = 3000;

app.listen(port, () => {
    console.log('Application has been started on port ' + port);
});
