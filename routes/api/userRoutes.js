const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  getAllUsers,
  addFriend,
  deleteFriend,
  updateUser,
  deleteUser
} = require('../../controllers/userController.js');

// /api/users
router.route('/').post(createUser).get(getAllUsers);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
