const express = require('express');
const directorsController = require('../controllers/directors');

const router = express.Router();

router.get('/', directorsController.getDirectors);
router.post('/', directorsController.createDirector);
router.get('/:id', directorsController.getDirector);
router.put('/:id', directorsController.editDirector);

module.exports = router;
