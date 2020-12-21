const Movie = require('../models/Movie');

exports.createMovie = (req, res) => {
  const movie = new Movie({

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
    description: req.body.description,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    photo: req.body.photo,
  });
  Movie.updateOne({ _id: req.params.id }, movie).then(
    () => {
      res.status(201).json({
        message: 'Report updated successfully!',
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
