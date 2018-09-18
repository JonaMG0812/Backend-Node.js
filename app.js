'use stritc'

var express = require('express');
var bodyParser = require ('body-parser');

var app = express();

//Loading routes files
var project_routes =  require('./routes/project');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//Loading routes
app.use('/api', project_routes);

//Exporting
module.exports = app;