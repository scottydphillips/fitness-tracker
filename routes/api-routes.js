const router = require('express').Router();
const db = require('../models');
const mongoose = require('mongoose');

router.post('/api/workouts', (req, res) => {
	db.Workout.create({})
	.then(dbWorkout => {
		res.json(dbWorkout);
	})
	.catch(err => {
		res.status(400).json(err);
	});
});

router.post('/api/workouts/bulk', (req, res) => {
	db.Workout.insertMany({})
	.then(dbWorkout => {
		res.json(dbWorkout);
	})
	.catch(err => {
		res.status(400).json(err);
	});
});

router.get('/api/workouts', (req,res) => {
	db.Workout.find({}, (err, dbWorkout) => {
		if(err) {
			console.log(err);
		} else {
			res.json(dbWorkout)
		}
	});
});

router.put('/api/workouts/:id', async (req,res) => {
	const updatedWorkout = await db.Workout.findByIdAndUpdate(req.params.id,
		{$push: { exercises: req.body }},
		{ upsert: true, useFindAndModify: false},
	) 	
		res.json(updatedWorkout);
});

module.exports = router;