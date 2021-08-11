const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
	type: {
		type: String,
		trim: true,
		required: 'Select resistance or cardio'
	},
	name: {
		type: String,
		trim: true,
		required: 'Enter the name of your workout'
	},
	duration: {
		type: Number,
		required: 'Enter the duration of the workout'
	},
	distance: {
		type: Number,
	},
	weight: {
		type: Number,
	},
	sets: {
		type: Number,
	},
	reps: {
		type: Number,
	},
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;