//invoke express and path
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet');
//access express
var app = express();
//access port
var port = process.env.PORT || '8000';
//server activation
app.listen(port, function(){
  console.log(`Listening at ${port}`);
})
//app configuration

app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));