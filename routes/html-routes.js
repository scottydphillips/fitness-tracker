const db = require('../models');
const path = require('path');
const router = require('express').Router();


module.exports = (router) => {
	router.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});

	router.get('/exercise', (req,res) => {
		res.sendFile(path.join(__dirname, '../public/exercise.html'))
	});

	router.get('/stats', (req,res) => {
		res.sendFile(path.join(__dirname, '../public/stats.html'))
	});
}