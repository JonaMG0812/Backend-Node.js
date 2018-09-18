'use strict'

var Project = require('../models/project');

var controller = {

    home: function(req, res){
        return res.status(200).send({
            message: '200: Home Ok!'
        });
    },

    test: function(req, res){
        return res.status(200).send({
            message: '200: Test Ok!'
        });
    },

    saveProject: function(req, res){
        var project = new Project();
        
        return res.status(200).send({
            message: '200: SaveProject Ok!'
        })
    }
    
};

module.exports = controller;