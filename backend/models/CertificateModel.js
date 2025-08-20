
const mongoose = require('mongoose');


const CertificateSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	enrollmentNumber: {
		type: String,
		required: true
	},
	certificateFile: {
		type: String,
		default: null // Path to uploaded certificate file
	}
});

module.exports = mongoose.model('Certificate', CertificateSchema);
