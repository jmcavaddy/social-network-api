const router = require('express').Router();
const {
  createThought,
  getAllThoughts,
  getSingleThought,
  updateThought,
  deleteThought
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').post(createThought).get(getAllThoughts);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;
