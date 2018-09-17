'use stritc'

var express = require('express');
var bodyParser = require ('body-parser');

var app = express();

//Loading routes files

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//Loading routes
app.get('/test', (req, res) => {
    res.status(200).send({
        message: "Status 200: Everything is awesome!"
    })
});

//Exporting
module.exports = app;