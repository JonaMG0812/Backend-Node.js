'use strict'

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
    }
    
};

module.exports = controller;