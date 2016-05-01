var express  = require('express');
var mongo    = require('mongodb');
var mongoose = require('mongoose');
var crypto   = require('crypto');

var User     = require('../models/user');
var Contract = require('../models/contract');
var Ticket   = require('../models/ticket');

var router   = express.Router();

mongoose.connect('mongodb://localhost/mydb');

//var randomId = crypto.randomBytes(20).toString('hex');

/* GET */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/addUser', function(req, res) {
    res.render('addUser.ejs');
});

/* POST */
router.post('/newUser', function(req,res) {
    console.log("CREATING USER:", req.body);
    new User({
        usr_id: crypto.randomBytes(20).toString('hex'), 
        name: req.body.UserName,
        address: req.body.UserAddress,
        phone: req.body.UserPhone
    }).save(function(err, prd) {
        if(err) {
            console.log("SAVE ERROR:");
            res.json(err);
        }
        else res.send("User Successfully Added!");
    });
});

/*
router.post('/new', function(req, res)) {
    new Ticket({
        Id: req.body.TicketId,
        FriendId: req.body.TicketFriendId,
        Type: req.body.TicketType,
        Deadline: req.body.TicketDeadline,
        Condition: req.body.TicketCondition,
        Flag: req.body.TicketFlag
    }).save(function(err, prd) {
        if(err) res.json(err);
        else res.send("Ticket Successfully Added!");
    });
});
*/
module.exports = router;
