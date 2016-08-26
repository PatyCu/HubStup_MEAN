var mongoose = require('mongoose');

// Create the StartupSchema.
var StartupsSchema = new mongoose.Schema({
	name: {
	    type: String,
	    required: true
	},
	url: {
		type: String,
		required: true
	}
});

// Export the model.
module.exports = mongoose.model('startups', StartupsSchema);
