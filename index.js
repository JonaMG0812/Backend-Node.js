'use strict'

//Importing moongose
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

//Connecting to the database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio', { useNewUrlParser: true })
    .then(() => {
        console.log('Connection to the database successfully established');
        //Creating server
        app.listen(port, () => {
            console.log("Running server correctly in: localhost:3700");
        });
    })
    .catch(error => console.log(error));