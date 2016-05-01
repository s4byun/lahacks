var express = require('express');
var router = express.Router();

var mongo = require('mongodb');
var mongoose = require('mongoose');
var crypto = require('crypto');

mongoose.connect('mongodb://localhost/mydb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/addUser', function(req, res) {
    res.render('addUser.ejs');
});


var userSchema = new mongoose.Schema ({
    Id: String,
    Name: String,
    Address: String,
    Phone: String
});

var randomId = crypto.randomBytes(20).toString('hex');

var User = mongoose.model('User', userSchema);

router.post('/newUser', function(req,res) {
    console.log("CREATING USER");
    new User({
        Id: randomId, 
        Name: req.body.UserName,
        Address: req.body.UserAddress,
        Phone: req.body.UserPhone
    }).save(function(err, prd) {
        if(err) {
            console.log("SAVE ERROR:");
            res.json(err);
        }
        else res.send("User Successfully Added!");
    });
});

/*
var ticketSchema = new mongoose.Schema ({
    Id: String,
    FriendId: String,
    Type: String,
    Deadline: Date,
    Condition: String,
    Flag: Boolean
});
*/
//var Ticket = mongoose.model('Ticket', ticketSchema);
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
