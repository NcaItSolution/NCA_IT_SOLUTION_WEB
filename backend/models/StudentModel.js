const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true
	},
	contactNumber: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
		trim: true
	},
	qualification: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	course: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Student', StudentSchema);
