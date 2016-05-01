// Load required packages
var mongoose = require('mongoose');

// contract schema definition
var ContractSchema = mongoose.Schema({
	user_id : {
		type     : String,
		required : true
	},
	tickets      : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket'}]
});

// Export the Mongoose model
module.exports = mongoose.model('Contract', ContractSchema);
