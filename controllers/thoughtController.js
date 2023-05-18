const { Thought } = require('../models');

module.exports = {
    createThought(req, res) {
        Thought.create(req.body)
          .then((thought) => res.json(thought))
          .catch((err) => res.status(500).json(err));
      },
    getAllThoughts(req, res) {
        Thought.find({})
          .then((thought) => res.json(thought))
          .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          });
      }

};