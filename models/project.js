'use strict'

var moongose = require('mongoose');
var Schema = moongose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: [String]
});

module.exports = moongose.model('Project','ProjectSchema');