const Director = require('../models/Director');

exports.createDirector = (req, res) => {
  console.log(req.body);
  const director = new Director({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    nationality: req.body.nationality,
    birthday: req.body.birthday,
  });
  director.save().then(
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

exports.getDirector = (req, res) => {
  Director.findOne({
    _id: req.params.id,
  }).then(
    (director) => {
      res.status(200).json(director);
    },
  ).catch(
    (error) => {
      res.status(404).json({
        error,
      });
    },
  );
};

exports.editDirector = (req, res) => {
  const director = new Director({
    _id: req.params.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    nationality: req.body.nationality,
    birthday: req.body.birthday,
  });
  Director.updateOne({ _id: req.params.id }, director).then(
    () => {
      res.status(201).json({
        message: 'Director updated successfully!',
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

exports.getDirectors = (req, res) => {
  Director.find().then(
    (directors) => {
      res.status(200).json(directors);
    },
  ).catch(
    (error) => {
      res.status(400).json({
        error,
      });
    },
  );
};
