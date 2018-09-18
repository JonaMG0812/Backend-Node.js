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

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.caetgory = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.name = null;

        project.saveProject((err, projectStored) => {
            if(err) return res.status(500).send({message: 'Error to save'});
            if(!projectStored) return res.status(404).send({message: 'The project could not be saved'});
            return res.status(200).send({message: projectStored});
        });
        
        return res.status(200).send({
            message: '200: SaveProject Ok!'
        })
    }
    
};

module.exports = controller;