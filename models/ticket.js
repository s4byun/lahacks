// Load required packages
var mongoose = require('mongoose');

// ticket schema definition
var TicketSchema   = new mongoose.Schema({
	tkt_id     : {
		type     : String
	},
	friend_id       : {
      type     : String,
      required : true
    },
	frd_id     : {
		type     : String
	},
	deadline   : {
    	type     : Date, 
		default  : Date.now
	},
	condition  : {
    	type     : String
	},
	flag       : {
		type     : Boolean
	}

});

// Export the Mongoose model
module.exports = mongoose.model('Ticket', TicketSchema);
