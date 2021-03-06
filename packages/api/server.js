const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()

const moviesRoute = require('./routes/movies')

const directorsRoute require('./routes/directors');

mongoose.connect('mongodb://localhost:27017/movies-list',
//mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iuprj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.warn('Connexion à MongoDB réussie !'))
  .catch(() => console.warn('Connexion à MongoDB échouée !'));

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/movie', moviesRoute);
app.use('/director', directorsRoute);

app.listen(3000, () => console.log('Movie api listening on port 3000!'))
