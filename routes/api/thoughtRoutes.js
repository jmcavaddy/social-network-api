const router = require('express').Router();
const {
  createThought,
  getAllThoughts
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').post(createThought).get(getAllThoughts);

module.exports = router;
