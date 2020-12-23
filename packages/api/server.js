const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const moviesRoute = require('./routes/movies')

mongoose.connect('mongodb://localhost:27017/movies-list',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.warn('Connexion à MongoDB réussie !'))
  .catch(() => console.warn('Connexion à MongoDB échouée !'));

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/movie', moviesRoute);

app.listen(3000, () => console.log('Movie api listening on port 3000!'))
