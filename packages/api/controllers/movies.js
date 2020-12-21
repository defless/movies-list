const Movie = require('../models/Movie');

exports.createReport = (req, res) => {
  const report = new Report({
    title: req.body.title,
    description: req.body.description,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    photo: req.body.photo,
  });
  report.save().then(
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

exports.getaReport = (req, res) => {
  Report.findOne({
    _id: req.params.id,
  }).then(
    (report) => {
      res.status(200).json(report);
    },
  ).catch(
    (error) => {
      res.status(404).json({
        error,
      });
    },
  );
};

exports.editReport = (req, res) => {
  const report = new Report({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    photo: req.body.photo,
  });
  Report.updateOne({ _id: req.params.id }, report).then(
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

exports.deleteReport = (req, res) => {
  Report.deleteOne({ _id: req.params.id }).then(
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

exports.getAllReports = (req, res) => {
  Report.find().then(
    (reports) => {
      res.status(200).json(reports);
    },
  ).catch(
    (error) => {
      res.status(400).json({
        error,
      });
    },
  );
};
