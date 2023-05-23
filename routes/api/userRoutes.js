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
router.route('/')
// Create a user
.post(createUser)
// Get all users
.get(getAllUsers);

// /api/users/:userId
router.route('/:userId')
// Get a single user by its _id and populated thought and friend data
.get(getSingleUser)
// Update a user by its _id
.put(updateUser)
// Delete a user by its _id
.delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
// Add a new friend to a user's friend list
.post(addFriend)
// Delete a friend from a user's friend list
.delete(deleteFriend);

module.exports = router;
