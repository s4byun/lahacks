// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var UserSchema = new mongoose.Schema({
	usr_id     : {
		type     : String,
		unique   : true,
		required : true
	},
	name       : {
		type     : String
	},
	address    : {
		type     : String
	},
	phone      : {
		type     : String	
	},
	_contract  : {
    	type     : mongoose.Schema.Types.ObjectId, ref: 'Contract'
   	}
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);