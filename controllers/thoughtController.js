const { Thought, User } = require('../models');

module.exports = {
    createThought(req, res) {
        Thought.create(req.body)
          .then((thought) => {
            return User.findOneAndUpdate(
              { username: req.body.username },
              { $addToSet: { thoughts: thought } },
              { runValidators: true, new: true }
            );
          })
          .then((user) => {
            if (!user) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(user);
          })
          .catch((err) => res.status(500).json(err));
      },
    getAllThoughts(req, res) {
        Thought.find({})
          .then((thought) => res.json(thought))
          .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          });
      },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .then((thought) => res.json(thought))
          .catch((err) => res.status(500).json(err));
      },

};