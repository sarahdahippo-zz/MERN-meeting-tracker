const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const meetingSchema = new Schema({
	username: { type: String, required: true },
	description: { type: String, required: true },
	duration: { type: Number, required: true },
	date: { type: Date, required: true},
	notes: { type: String, required: false}
}, {
	timestamps: true,
});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;