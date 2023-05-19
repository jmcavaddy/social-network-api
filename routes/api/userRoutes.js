const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  getAllUsers,
} = require('../../controllers/userController.js');

// /api/users
router.route('/').post(createUser).get(getAllUsers);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

module.exports = router;
