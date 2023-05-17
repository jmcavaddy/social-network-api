const router = require('express').Router();
const {
  createUser
} = require('../../controllers/userController.js');

// /api/users
router.route('/').post(createUser);

module.exports = router;
