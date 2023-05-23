const { User } = require('../models')

module.exports = {
    createUser(req, res) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },
    getAllUsers(req, res) {
        User.find({})
          .then((user) => res.json(user))
          .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          });
      },
    updateUser(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.userId }, 
        req.body, 
        { runValidators: true, new: true })
        .then((user) => {
          if (!user) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
          }
          res.json(user);
        })
        .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },

    addFriend(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { friends: req.params.friendId } }, 
          { runValidators: true, new: true }
        )
          .then((user) => {
            if (!user) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(user);
          })
          .catch((err) => res.json(err));
      },
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
          )
            .then((user) => res.json(user))
            .catch((err) => res.json(err));
      }
}