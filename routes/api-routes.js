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

router.get('/api/workouts', (req,res) => {
	db.Workout.aggregate(
		[
			{
				$addFields: {
					totalDuration: {
						$sum: '$exercises.duration'
					}
				}
			}
		]
	)
	.then(dbWorkout => {
		res.send(dbWorkout);
	})
	.catch(err => {
		res.status(400).json(err);
	});
});

router.get('/api/workouts/range', (req,res) => {
	db.Workout.aggregate(
		[
			{
				$addFields: {
					totalDuration: {
						$sum: '$exercises.duration'
					}
				}
			}
		]
	)
	.sort({ day: -1 }).limit(7)
	.then(dbWorkout => {
		console.log(dbWorkout);
		res.json(dbWorkout);
	})
	.catch(err => {
		res.status(400).json(err);
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