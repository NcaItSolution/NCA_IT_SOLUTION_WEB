const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	duration: {
		type: String,
		required: true
	},
	cost: {
		type: Number,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	syllabus: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Course', CourseSchema);
