const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
	useNewUrlParser: true,
	useFineAndModify: false
});

app.use(require('api.js'));

app.listen(PORT, () => {
	console.log(`In the words of Frasier Crane, "I'm listening"`)
});