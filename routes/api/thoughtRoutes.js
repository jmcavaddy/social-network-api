const router = require('express').Router();
const {
  createThought,
  getAllThoughts,
  getSingleThought
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').post(createThought).get(getAllThoughts);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought);

module.exports = router;
