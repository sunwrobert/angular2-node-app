var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', function (req, res, next){
    Message.find().exec(function(err, messages) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json({
            message: 'Messages retrieved',
            obj: messages
        });
    });
}); 

router.post('/', function (req, res, next) {
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err, result){
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Message saved successfully',
            obj: result
        });
    })
});

module.exports = router;