const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const moviesRoute = require('./routes/movies')

mongoose.connect('mongodb://localhost:27017/movies-list',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.warn('Connexion à MongoDB réussie !'))
  .catch(() => console.warn('Connexion à MongoDB échouée !'));

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'PUT POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/movie', moviesRoute);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
