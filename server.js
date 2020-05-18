const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });


app.get('/exercise', function(req, res) {
  res.sendFile(path.join(__dirname, "/public/exercise.html"));
});

app.listen(PORT);
