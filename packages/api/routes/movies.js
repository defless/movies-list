const express = require('express');
const moviesController = require('../controllers/movies');

const router = express.Router();

router.get('/', moviesController.getMovies);
router.post('/', moviesController.createMovie);
router.get('/:id', moviesController.getMovie);
router.put('/:id', moviesController.editMovie);
router.delete('/:id', moviesController.deleteMovie);

module.exports = router;
