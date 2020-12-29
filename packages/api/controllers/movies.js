const Movie = require('../models/Movie');

exports.createMovie = (req, res) => {
  console.log(req.body);
  const movie = new Movie({
    title: req.body.title,
    year: req.body.year,
    description: req.body.description,
    director: req.body.director,
    score: req.body.score,
    poster: req.body.poster,
  });
  movie.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!',
      });
    },
  ).catch(
    (error) => {
      res.status(400).json({
        error,
      });
    },
  );
};

exports.getMovie = (req, res) => {
  Movie.findOne({
    _id: req.params.id,
  }).then(
    (movie) => {
      res.status(200).json(movie);
    },
  ).catch(
    (error) => {
      res.status(404).json({
        error,
      });
    },
  );
};

exports.editMovie = (req, res) => {
  const movie = new Movie({
    _id: req.params.id,
    title: req.body.title,
    year: req.body.year,
    description: req.body.description,
    director: req.body.director,
    score: req.body.score,
    poster: req.body.poster,
  });
  Movie.updateOne({ _id: req.params.id }, movie).then(
    () => {
      res.status(201).json({
        message: 'Movie updated successfully!',
      });
    },
  ).catch(
    (error) => {
      res.status(400).json({
        error,
      });
    },
  );
};

exports.deleteMovie = (req, res) => {
  Movie.deleteOne({ _id: req.params.id }).then(
    () => {
      res.status(200).json({
        message: 'Deleted!',
      });
    },
  ).catch(
    (error) => {
      res.status(400).json({
        error,
      });
    },
  );
};

exports.getMovies = (req, res) => {
  Movie.find().then(
    (movies) => {
      res.status(200).json(movies);
    },
  ).catch(
    (error) => {
      res.status(400).json({
        error,
      });
    },
  );
};
